const express = require('express');
const router = express.Router();

const Creature = require('../../db/models/creature');

router.get('/', (req, res) => {
  Creature.find({}, (err, creatures) => {
    if(err){console.log(err)}
    res.send(creatures)
  })
})

router.get('/:set', (req, res) => {
  Creature.find({set: req.params.set}, (err, creatures) => {
    if(err){console.log(err)}
    res.send(creatures)
  })
})

router.get('/:set/:id', (req, res) => {
  Creature.findOne({set: req.params.set, id: req.params.id}, (err, creature) => {
    if(err){console.log(err)}
    res.send(creature)
  })
})

module.exports = router;
