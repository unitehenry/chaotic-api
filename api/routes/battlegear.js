const express = require('express');
const router = express.Router();

const Battlegear = require('../../db/models/battlegear');

router.get('/', (req, res) => {
  Battlegear.find({}, (err, battlegear) => {
    if(err){console.log(err)}
    res.send(battlegear)
  })
})

router.get('/:set', (req, res) => {
  Battlegear.find({set: req.params.set}, (err, battlegear) => {
    if(err){console.log(err)}
    res.send(battlegear)
  })
})

router.get('/:set/:id', (req, res) => {
  Battlegear.findOne({set: req.params.set, id: req.params.id}, (err, battlegear) => {
    if(err){console.log(err)}
    res.send(battlegear)
  })
})

module.exports = router;
