const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create schema
const DevicesSchema = new Schema({
  uid: {
    type: String,
    required: true,
  },
  deviceName: {
    type: String,
    required: true,
  },
});

module.exports = Devices = mongoose.model('devices', DevicesSchema);
