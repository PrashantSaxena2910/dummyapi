const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  id:{
    type:String,
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
  
  
  
  registerDate: {
    type: Date,
    default: Date.now
  },
  phone: String,
  picture: String,
  
});

const User = mongoose.model('User', userSchema);

module.exports = User;
