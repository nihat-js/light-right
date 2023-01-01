const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxLength: 32, },
  email: { type: String, required: true, unique: true, maxLength: 255, },
  phone: { type: Number, default: null, },
  password: { type: String, required: true, },
  is_email_verified: { type: Boolean, default: false },
  is_phone_verified: { type: Boolean, default: false },
  is_private: { type: Boolean, default: false, },
  register_info: { type: Object, required: true },
  active_devices: [],

  bio: { type: String, default : '' },
  followers_count: { type: Number, default: 0 },
  following_count: { type: Number, default: 0 },
  posts_count: { type: Number, default: 0, },

  following_list: { type: Array },
  followers_list: { type: Array },
  posts_list: { type: Array },
})

module.exports = mongoose.model('users', userSchema)