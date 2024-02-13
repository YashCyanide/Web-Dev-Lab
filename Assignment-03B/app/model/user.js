const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  email: { type: String, required: true },
  firstName: { type: String, default: '' },
  lastName: { type: String, default: '' },
  phone: {type:String,required:true},
});

module.exports = mongoose.model('User', UserSchema);
