const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, },
  auth: { type: String, required: true, },
  followers_count: { type: Number, default: 0 },
  following_count: { type: Number, default: 0 },
  posts_count: { type: Number, default: 0, },
  posts_id: {},
  following_id: {},
  followers_id: {},
  register_ip: { type: String, required: true, },
  register_timestamp: { type: number }
  // male : {type}

})

const generate_key = 'generateotest'

app.use(express.json())
app.use(cors())



app.get('/register', (req, res) => {

  const usernameRegexp = new Regexp('^[a - z]{ 1}[a - z0 -9_]{3,35}$');
  const checkUsername = usernameRegexp.test(req.body.username)

  if (!checkUsername) {
    res.send({ 'error': 'Username is not allowed' })
  }


  const auth = Math.random().toString(36).substring(2, 10) + Math.random().toString(36).substring(2, 10)
  const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress
  const register_timestamp = new Date().getDate()

  mongoose.connect('mongodb+srv://nihat-js:Smss2003A@main.a3uedqb.mongodb.net/light_right?retryWrites=true&w=majority')
  const userModel = mongoose.model('users', userSchema)

  const user = new userModel({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    auth: auth,
    followers_count: 0,
    following_count: 0,
    posts_count: 0,
    following_id: [],
    followers_id: [],
    posts_id: [],
    register_ip: ip,
    register_timestamp: register_timestamp
  })

  user.save().then(err, lastData => {
    console.log(`user saved ${lastData} `)
    res.send({})
  })

})

app.listen(1000)