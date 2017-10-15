
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt-nodejs');

const RoomSchema = mongoose.Schema({
  name: String,
  participants: [String],
  admin: String
});

module.exports = mongoose.model('Room', RoomSchema, 'Room');
