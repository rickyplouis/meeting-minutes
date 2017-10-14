var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var UserSchema = mongoose.Schema({
  email : String,
  username: String,
  password: String,
  tilt: Number,
  categories: Array,
  influencers:Array
})

UserSchema.statics.findByUserName = function(username) {
  return this.find({username : new RegExp('^' + username, 'i')})
}

UserSchema.statics.findByName = function(name){
  return this.find({name: new RegExp('^' + name, 'i')})
}

UserSchema.methods.generateHash = function(password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

UserSchema.methods.validPassword = function(password){
  return bcrypt.compareSync(password, this.password);
}

module.exports = mongoose.model('User', UserSchema, '_User');
