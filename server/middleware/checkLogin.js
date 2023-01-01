const mongoose = require('mongoose')

const User = require('../models/User')


async function checkLogin(request, response, next) {

  const ip = request.headers['x-forwarded-for'] || request.socket.remoteAddress

  if (request.headers._nt.length > 1000 || typeof (request.headers._nt) != 'string') {
    response.json({ 'error': 'wrong-length' })
    return false
  }

  let splittedCookieArray = request.headers._nt.split(';')
  let sessionCookie
  splittedCookieArray.forEach(s => {
    s = s.trim()
    if (s.substring(0, 3) == '_nt') {
      sessionCookie = s.substring(4,)
    }
  })
  if (!sessionCookie) {
    response.json({ 'error': 'not-found' })
    return false
  }
  let id = sessionCookie.substring(0, 24)
  let session = sessionCookie.substring(24)


  await mongoose.connect('mongodb+srv://nihat-js:Smss2003A@main.a3uedqb.mongodb.net/light_right?retryWrites=true&w=majority')

  let user = await User.findById(id)

  if (!user) {
    response.json({ 'errorMessage': 'user-not-found' })
    return false
  }

  let activeDevice

  user.active_devices.forEach(item => {
    if (item.ip == ip && item.session == sessionCookie) {
      activeDevice = item
      return false
    }
  })

  if (!activeDevice) {
    response.json({ 'errorMessage': 'unauthorized-login' })
    return false
  }

  request.body.id = user._id
  console.log('Congratulations')
  next()



}

module.exports = checkLogin