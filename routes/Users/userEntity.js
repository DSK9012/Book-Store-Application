const mongoose = require('mongoose');

const userEntity = mongoose.Schema({
  userName: {
    type: String,
    default: '',
    require: true,
    trim: true,
  },
  userMail: {
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
  userInstitute: {
    type: String,
    trim: true,
    default: '',
  },
  userStandard: {
    type: String,
    trim: true,
    default: '',
  },
  userImgName: {
    type: String,
    trim: true,
    default: '',
    alias: 'avatar',
  },
});

module.exports = mongoose.model('users', userEntity);
