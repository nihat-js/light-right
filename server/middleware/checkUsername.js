const mongoose = require('mongoose')
const User  = require('../models/User')

function checkUsername(request, response, next) {
  console.log(request.body)
  if (!request.body.username){
    response.json({'errorMessage':'not-found'})
    return false
  }
  let username = request.body.username
  
  if (username == '') {
    response.json({'errorMessage':'not-found'})
    return false
    
  }
  if (username > 50) {
    response.json({'errorMessage':'length'})
    return false
  }
  if (username.includes(' ')) {
    response.json({'errorMessage':'space'})
    return false
  }
  request.body.username = username.toLowerCase()
  next()
}

module.exports = checkUsername