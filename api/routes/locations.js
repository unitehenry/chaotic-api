const express = require('express');
const router = express.Router();

const Location = require('../../db/models/location');

router.get('/', (req, res) => {
  Location.find({}, (err, locations) => {
    if(err){console.log(err)}
    res.send(locations)
  })
})

router.get('/:set', (req, res) => {
  Location.find({set: req.params.set}, (err, locations) => {
    if(err){console.log(err)}
    res.send(locations)
  })
})

router.get('/:set/:id', (req, res) => {
  Location.findOne({set: req.params.set, id: req.params.id}, (err, location) =>{
    if(err){console.log(err)}
    res.send(location)
  })
})

module.exports = router;
