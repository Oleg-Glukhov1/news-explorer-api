const mongoose = require('mongoose');
const isURL = require('validator/lib/isURL');
const { INVALID_LINK } = require('../utils/constant');

const articleSchema = mongoose.Schema({
  keyword: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v), message: INVALID_LINK,
    },
  },
  image: {
    type: String,
    required: true,
    validate: {
      validator: (v) => isURL(v), message: INVALID_LINK,
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

module.exports = mongoose.model('article', articleSchema);
