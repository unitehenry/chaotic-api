const express = require('express');
const router = express.Router();

const Mugic = require('../../db/models/mugic');

router.get('/', (req, res) => {
  Mugic.find({}, (err, mugic) => {
    if(err){console.log(err)}
    res.send(mugic)
  })
})

router.get('/:set', (req, res) => {
  Mugic.find({set: req.params.set}, (err, mugic) => {
    if(err){console.log(err)}
    res.send(mugic)
  })
})

router.get('/:set/:id', (req, res) => {
  Mugic.findOne({set: req.params.set, id: req.params.id}, (err, mugic) => {
    if(err){console.log(err)}
    res.send(mugic)
  })
})

module.exports = router;
