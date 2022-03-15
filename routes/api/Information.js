const express = require('express');
const router = express.Router();

// Information model
const Information = require('../../models/Information');

router.post('/', (req, res) => {
  const newInfo = new Information({
    fromWhatDevice: req.body.fromWhatDevice,
    closeContact: req.body.closeContact,
  });
  newInfo
    .save()
    .then((info) => res.json(info))
    .then((info) => console.log(info));
});

module.exports = router;
