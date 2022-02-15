const express = require('express');
const router = express.Router();

// Information model
const Information = require('../../models/Information');

router.post('/', (req, res) => {
  const newInfo = new Information({
    uid: req.body.uid,
  });
  newInfo
    .save()
    .then((info) => res.json(info))
    .then((info) => console.log(info));
});

module.exports = router;
