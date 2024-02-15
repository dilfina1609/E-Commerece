const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
  },
  cartData: {
    type: Object,
  },
})

const UserModel = mongoose.model("users", UserSchema);
module.exports = UserModel;