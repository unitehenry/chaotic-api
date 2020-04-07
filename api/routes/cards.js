const express = require('express');
const router = express.Router();

const Battlegear = require('../../db/models/battlegear');
const Attack = require('../../db/models/attack');
const Creature = require('../../db/models/creature');
const Location = require('../../db/models/location');
const Mugic = require('../../db/models/mugic');

// Returns all cards
router.get('/', (req, res) => {
  let cards = [];

  Creature.find({}, (err, creatures) => {
    if(err){console.log(err)}
    creatures.forEach((creature) => {
      cards.push(creature)
    })
    Attack.find({}, (err, attacks) => {
      if(err){console.log(err)}
      attacks.forEach((attack) => {
        cards.push(attack)
      })
      Battlegear.find({}, (err, battlegears) => {
        if(err){console.log(err)}
        battlegears.forEach((battlegear) => {
          cards.push(battlegear)
        })
        Location.find({}, (err, locations) => {
          if(err){console.log(err)}
          locations.forEach((location) => {
            cards.push(location)
          })
          Mugic.find({}, (err, mugics) => {
            if(err){console.log(err)}
            mugics.forEach((mugic) => {
              cards.push(mugic)
            })
            res.send(cards)
          })
        })
      })
    })
  })
})

// Returns all cards from set
router.get('/:set', (req, res) => {
  let cards = [];

  Creature.find({set: req.params.set}, (err, creatures) => {
    if(err){console.log(err)}
    creatures.forEach((creature) => {
      cards.push(creature)
    })
    Attack.find({set: req.params.set}, (err, attacks) => {
      if(err){console.log(err)}
      attacks.forEach((attack) => {
        cards.push(attack)
      })
      Battlegear.find({set: req.params.set}, (err, battlegears) => {
        if(err){console.log(err)}
        battlegears.forEach((battlegear) => {
          cards.push(battlegear)
        })
        Location.find({set: req.params.set}, (err, locations) => {
          if(err){console.log(err)}
          locations.forEach((location) => {
            cards.push(location)
          })
          Mugic.find({set: req.params.set}, (err, mugics) => {
            if(err){console.log(err)}
            mugics.forEach((mugic) => {
              cards.push(mugic)
            })
            res.send(cards)
          })
        })
      })
    })
  })
})

module.exports = router;
