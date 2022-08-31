const mongoose = require('mongoose');

const userEntity = mongoose.Schema({
  name: {
    type: String,
    default: '',
    require: true,
    trim: true,
  },
  email: {
    type: String,
    default: '',
    trim: true,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    trim: true,
    require: true,
    default: '',
  },
  institute: {
    type: String,
    trim: true,
    default: '',
  },
  standard: {
    type: String,
    trim: true,
    default: '',
  },
  avatar: {
    type: Buffer,
    trim: true,
    default: '',
    alias: 'avatar',
  },
});

module.exports = mongoose.model('users', userEntity);
