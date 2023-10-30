let mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
  },
  restaurant: {
    type: String,
  },
  description: {
    type: String,
  },
  review: {
    type: String,
  },
  imageURL:{
    type: String,
}
  
}, {
    collection: 'posts'
  });

module.exports = mongoose.model('Post', userSchema)