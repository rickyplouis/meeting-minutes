const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const UserSchema = mongoose.Schema({
  name: String
});

UserSchema.statics.findByName = (name) => {
  return this.find({name: new RegExp('^' + name, 'i')});
}
module.exports = mongoose.model('User', UserSchema, '_User');
