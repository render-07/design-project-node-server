const express = require('express');
const router = express.Router();

// Location model
const Location = require('../../models/Location');

router.post('/', (req, res) => {
  const addLocation = new Location({
    uid: req.body.uid,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
  });
  addLocation
    .save()
    .then((info) => res.json(info))
    .then((info) => console.log(info));
});

router.get('/:uid', (req, res) => {
  Location.findOne({ uid: req.params.uid }, 'latitude longitude -_id')
    .limit(1)
    .sort({ $natural: -1 })
    .then((info) => res.json(info));
});

module.exports = router;
