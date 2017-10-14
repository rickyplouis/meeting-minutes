
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const RoomSchema = mongoose.Schema({
  name: String,
  participants: [String]
});

RoomSchema.statics.findById = (id) => {
  return this.find({username : new RegExp('^' + id, 'i')});
}

module.exports = mongoose.model('Room', RoomSchema, 'Room');
