const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  id:{
    type:String
  },
  text: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 1000
  },
  image: String,
  likes: {
    type: Number,
    default: 0
  },
  link: {
    type: String,
    maxlength: 200
  },
  tags: [String],
  publishDate: {
    type: Date,
    default: Date.now
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'UserPreview',
    required: true
  }
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
