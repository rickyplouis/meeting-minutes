const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = mongoose.Schema({
  // email : String,
  // username: String,
  // password: String,
  name: String
})

UserSchema.statics.findByName = (name) => {
  return this.find({name: new RegExp('^' + name, 'i')});
}

// UserSchema.methods.generateHash = (password) => {
  // return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
// };
//
// UserSchema.methods.validPassword = (password) => {
  // return bcrypt.compareSync(password, this.password);
// }
//
module.exports = mongoose.model('User', UserSchema, '_User');
