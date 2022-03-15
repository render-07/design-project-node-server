const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const InformationSchema = new Schema({
  fromWhatDevice: {
    type: String,
    required: true,
  },
  closeContact: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Information = mongoose.model('information', InformationSchema);
