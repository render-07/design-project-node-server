const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const LocationSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  latitude: {
    type: String,
    required: false,
  },
  longitude: {
    type: String,
    required: false,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Location = mongoose.model('location', LocationSchema);
