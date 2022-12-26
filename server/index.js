const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const key = 'nihatjs'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, },
  email: { type: String, required: true, unique: true },
  phone: { type: Number, default: null },
  password: { type: String, required: true, },
  auth: { type: String, required: true, },
  followers_count: { type: Number, default: 0 },
  following_count: { type: Number, default: 0 },
  posts_count: { type: Number, default: 0, },
  posts_list: [],
  following_list: [],
  followers_list: [],
  register_ip: { type: String, required: true, },
  register_timestamp: { type: Number },
  isEmailVerified: { type: Boolean, default: false },
  isPrivate: false,
})

const postSchema = new mongoose.Schema({
  user_id: mongoose.Types.ObjectId,
  img: { type: String, },
  text: { type: String, },
  tags: { type: Array },
  created_at: { type: Number },
  updated_at: { type: Number },
  like_count: { type: Number, default: 0, },
  like_list: []

})

app.use(express.json())
app.use(cors())


app.post('login', (req, res) => {

})

app.post('register', (req, res,) => {


  const usernameRegexp = new RegExp('^[a-z]{1}[a-z0-9_]{3,35}$')
  const emailRegexp = new RegExp()
  const checkUsername = usernameRegexp.test(req.body.username)

  if (!checkUsername) {
    res.json({ 'errorCode': 'invalid-username' })
    res.end()
    return false
  }

  console.log(req.body.username)


  const auth = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  const register_timestamp = new Date().getTime()

  mongoose.connect('mongodb+srv://nihat-js:Smss2003A@main.a3uedqb.mongodb.net/light_right?retryWrites=true&w=majority')
  const userModel = mongoose.model('users', userSchema)

  const user = new userModel({
    username: req.body.username,
    email: req.body.email,
    phone: null,
    password: req.body.password,
    auth: auth,
    followers_count: 0,
    following_count: 0,
    posts_count: 0,
    following_list: [],
    followers_id: [],
    posts_id: [],
    register_ip: ip,
    register_timestamp: register_timestamp,
    isEmailVerified: false,
    active_devices: [{}],

  })

  user.save((err, lastData) => {
    // console.log(`user saved ${lastData} `)
    res.json({ 'errorCode': '', '_nt': `${lastData._id}${lastData.auth}` })
    res.end()
    return false
  })

})


app.post('/api/share', aoth, async (request, response) => {
  const postModel = new mongoose.model('posts', postSchema)
  const userModel = new mongoose.model('users', userSchema)
  let timestamp = new Date().getTime()
  const NewPost = new postModel({
    user_id: mongoose.Types.ObjectId(req.body.id),
    img: null,
    text: req.body.text,
    tags: [],
    created_at: timestamp,
    updated_at: timestamp
  })
  let postSavedResult = await NewPost.save()
  let user = userModel.findById(req.body.id)
  let postsList = userModel.posts_list

  console.log(postsList)

})

app.get('/api/follow', async (request, response) => {
  let profileId
  let targetId
  let id = "63a76ff1b2ceb59c2e3bdb88"


  mongoose.connect('mongodb+srv://nihat-js:Smss2003A@main.a3uedqb.mongodb.net/light_right?retryWrites=true&w=majority')
  let followingList, isFollowing = false
  const userModel = mongoose.model('users', userSchema)

  let userResult = await userModel.findById(id).lean();
  console.log("userResult" + JSON.stringify(userResult))
  if (typeof userResult.following_list == 'Array' && userResult.following_list.length > 0) {
    followingList.forEach(x => {
      if (x.id == request.body.targetId) {
        isFollowing == true
      }
    })
  }

  userModel.findO


})

app.post('/api/unfollow', aoth, async (request, response) => {

})

function aoth(req, res, next) {
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress

  if (req.headers._nt.length > 1000 || typeof (req.headers._nt) != 'string') {
    return false
  }

  let splittedCookieArray = req.headers._nt.split(';')
  let _nt
  splittedCookieArray.forEach(s => {
    s = s.trim()
    if (s.substring(0, 3) == '_nt') {
      _nt = s.substring(4,)
    }
  })

  let id = _nt.substring(0, 24)
  let auth = _nt.substring(24)


  mongoose.connect('mongodb+srv://nihat-js:Smss2003A@main.a3uedqb.mongodb.net/light_right?retryWrites=true&w=majority')
  const userModel = mongoose.model('users', userSchema)

  userModel.findById(id).findOne({ auth: auth }).lean().then(res => {

    let isRecognizedIp = false
    res.active_devices.forEach(device => {
      if (device.ip == ip) {
        isRecognizedIp = true
      }
    })
    if (!isRecognizedIp) {
      deleteAuth()
      res.json({ error: 'Unauthorized login' })
      return false
    } else {
      req.body.id = id
      // req.body.text = req.body.text
      next()
    }




  })

}


function deleteAuth() {

}




app.listen(1000)