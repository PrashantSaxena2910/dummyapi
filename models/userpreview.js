const mongoose = require('mongoose');

const userPreviewSchema = new mongoose.Schema({
  id:{
    type: String,
  },
  title: {
    type: String,
    enum: ["mr", "ms", "mrs", "miss", "dr", ""]
  },
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  lastName: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 50
  },
  picture: String
});

const UserPreview = mongoose.model('UserPreview', userPreviewSchema);

module.exports = UserPreview;
