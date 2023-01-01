const express = require('express')
const cors = require('cors')
const bcrypt = require('bcrypt')

const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const validateRegister = require('./validation/Register')
const User = require('./models/User')

//Middlewares
const checkLogin = require('./middleware/checkLogin')
const checkUsername = require('./middleware/checkUsername')
const app = express()
app.use(express.json())
app.use(cors())


const random8 = () => Math.random().toString(36).substring(2, 10)
const random24 = () => random8() + random8() + random8()



app.post('/api/register', async (request, response) => {
  let data = {
    username: request.body.username.toLowerCase(),
    email: request.body.email.toLowerCase(),
    password: request.body.password
  }

  const validate = validateRegister(data)
  if (!validate) {
    response.sendStatus(500)
    return false
  }


  await mongoose.connect('mongodb+srv://nihat-js:Smss2003A@main.a3uedqb.mongodb.net/light_right?retryWrites=true&w=majority',)

  const isUserExist = await User.findOne({ username: request.body.username })
  if (isUserExist) {
    response.sendStatus(500)
    return false
  }
  const isEmailExist = await User.findOne({ email: request.body.email })
  if (isEmailExist) {
    response.sendStatus(500)
    return false
  }

  data.password = await bcrypt.hash(data.password, 5)

  const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress
  const register_timestamp = new Date().getTime()



  const user = new User({
    username: data.username,
    email: data.email,
    phone: null,
    password: data.password,
    is_email_verified: false,
    is_phone_verified: false,
    is_private: false,
    register_info: { ip: ip, timestamp: register_timestamp, user_agent: request.headers['user-agent'] || '', },
    active_devices: [],

    bio: '',
    followers_count: 0,
    following_count: 0,
    posts_count: 0,

    following_list: [],
    followers_id: [],
    posts_id: [],

  })

  const savedUser = await user.save()
  if (!savedUser) {
    response.sendStatus(500)
    return false
  }
  console.log('saved user')

  const newDevice = {
    ip: ip,
    login_timestamp: register_timestamp,
    user_agent: request.headers['user-agent'] || '',
    session: savedUser._id + random24()
  }

  savedUser.active_devices = savedUser.active_devices?.filter(x => x.ip != ip)
  savedUser.active_devices.push(newDevice)

  const saveNewDevice = await savedUser.save()

  if (!saveNewDevice) {
    res.sendStatus(500)
    return false
  }
  response.send(`_nt${newDevice.session}`)





})



app.post('/api/login', async (request, response) => {

  if (!request.body.username || !request.body.password) {
    response.sendStatus(404).json({ 'error': 'wrong-credentials' })
    return false
  }

  const data = {
    username: request.body.username.trim().toLowerCase(),
    password: request.body.password
  }

  await mongoose.connect('mongodb+srv://nihat-js:Smss2003A@main.a3uedqb.mongodb.net/light_right?retryWrites=true&w=majority',)
  let user = await User.findOne({ username: data.username })
  if (!user) {
    response.sendStatus(200).json({ 'error': 'wrong-credentials' })
    return false
  }

  let result = await bcrypt.compare(data.password, user.password)
  if (!result) {
    response.sendStatus(200).json({ 'error': 'wrong-credentials' })
    return false
  }

  const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress

  const newDevice = {
    ip: ip,
    login_timestamp: new Date().getTime(),
    user_agent: request.headers['user-agent'] || '',
    session: user._id + random24()
  }

  user.active_devices = user.active_devices.filter(x => x.ip != ip)
  user.active_devices.push(newDevice)

  const savedNewDevice = await user.save()
  if (!savedNewDevice) {
    response.sendStatus(200).json({ 'error': "could not log in" })
  }

  response.send(`_nt=${newDevice.session}`)


})


app.post('/api/follow', checkUsername, checkLogin, async (request, response) => {
  let mainUserId = request.body.id.toString()
  let targetUsername = request.body.username

  console.log(mainUserId,targetUsername)

})






// app.post('/api/share', aoth, async (request, response) => {
//   const postModel = new mongoose.model('posts', postSchema)
//   const userModel = new mongoose.model('users', userSchema)
//   let timestamp = new Date().getTime()
//   const NewPost = new postModel({
//     user_id: mongoose.Types.ObjectId(request.body.id),
//     img: null,
//     text: req.body.text,
//     tags: [],
//     created_at: timestamp,
//     updated_at: timestamp
//   })
//   let postSavedResult = await NewPost.save()
//   let user = userModel.findById(req.body.id)
//   let postsList = userModel.posts_list

//   console.log(postsList)

// })

// // app.get('/api/follow', async (request, response) => {
// //   let profileId
// //   let targetId
// //   let id = "63a76ff1b2ceb59c2e3bdb88"


// //   mongoose.connect('mongodb+srv://nihat-js:Smss2003A@main.a3uedqb.mongodb.net/light_right?retryWrites=true&w=majority')
// //   let followingList, isFollowing = false
// //   const userModel = mongoose.model('users', userSchema)

// //   let userResult = await userModel.findById(id).lean();
// //   console.log("userResult" + JSON.stringify(userResult))
// //   if (typeof userResult.following_list == 'Array' && userResult.following_list.length > 0) {
// //     followingList.forEach(x => {
// //       if (x.id == request.body.targetId) {
// //         isFollowing == true
// //       }
// //     })
// //   }

// //   userModel.findO


// // })

// app.post('/api/unfollow', aoth, async (request, response) => {

// })






app.listen(1000)