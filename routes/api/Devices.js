const express = require('express');
const router = express.Router();

// Devices model
const Devices = require('../../models/Devices');

// router.post('/', (req, res) => {
//   const newDevice = new Devices({
//     uid: req.body.uid,
//   });
//   newDevice
//     .save()
//     .then((info) => res.json(info))
//     .then((info) => console.log(info));
// });

router.get('/:uid', (req, res) => {
  Devices.findOne({ uid: req.params.uid }).then((info) => res.json(info));
});

router.get('/', (req, res) => {
  Devices.find().then((info) => res.json(info));
});

module.exports = router;
