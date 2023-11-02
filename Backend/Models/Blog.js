// Blog.js
let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  dob: {
    type: String,
  },
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  verifyPassword: {
    type: String,
  },
  profilePicture: {
    type: String,
  },
  aboutYourself: {
    type: String,
  },
  
}, {
    collection: 'users',
    timestamps:true
  });

module.exports = mongoose.model('User', userSchema)