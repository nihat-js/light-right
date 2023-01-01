function validateRegister(data) {
  const usernameRegexp = new RegExp(/^[a-z]{1}[a-z0-9_]{3,35}$/)
  const emailRegexp = new RegExp(/^([a-z0-9_-]+)\@{1}([a-z0-9-]+)\.[a-z]{2,10}/)
  if (!data.username || !data.email || !data.password) {
    return false
  }
  data.username = data.username.toLowerCase()
  data.email = data.email.toLowerCase()

  if (usernameRegexp.test(data.username) === false) {
    return false
  }
  if (emailRegexp.test(data.email) === false) {
    return false
  }
  if (data.password.length < 6) {
    return false
  }
  if (data.password == "123456") {
    return false
  }
  if (data.password == "qwe1234") {
    return false
  }


  return true
}

module.exports = validateRegister