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
    required: true,
  },
  longitude: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Location = mongoose.model('location', LocationSchema);
