const express = require('express');
const router = express.Router();

const Attack = require('../../db/models/attack');

router.get('/', (req, res) => {
  Attack.find({}, (err, attacks) => {
    if(err){console.log(err)}
    res.send(attacks)
  })
})

router.get('/:set', (req, res) => {
  Attack.find({set: req.params.set}, (err, attacks) => {
    if(err){console.log(err)}
    res.send(attacks)
  })
})

router.get('/:set/:id', (req, res) => {
  Attack.findOne({set: req.params.set, id: req.params.id}, (err, attack) => {
    if(err){console.log(err)}
    res.send(attack)
  })
})

module.exports = router;
