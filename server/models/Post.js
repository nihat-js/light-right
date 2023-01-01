const mongoose = require('mongoose')
const postSchema = new mongoose.Schema({
  user_id: mongoose.Types.ObjectId,
  image: { type: String, },
  text: { type: String, },
  tags: { type: Array },
  created_at: { type: Number },
  updated_at: { type: Number },
  like_count: { type: Number, default: 0, },
  like_list: []

})

export default mongoose.model('posts',postSchema)