//Chaotic Mugic Card

//Mongoose
const mongoose = require('mongoose');
/*
mongoose.connect('mongodb://localhost/chaotic');

const db = mongoose.connection;
db.on('open', () => { console.log('Connection Establised!') });
*/
//Mugic Schema
const MugicSchema = mongoose.Schema({
  name: String,
  set: String,
  rarity: String,
  id: Number,
  tribe: String,
  cost: Number,
  ability: String,
  flavor: String,
  unique: String,
  past: String,
  artist: String,
});

//Mugic Model
const Mugic = module.exports = mongoose.model('Mugic', MugicSchema);

//New Mugic Entry
/*
Mugic.create({
  type: "Mugic",
  set: "Dawn of Perim",
  number: 240,
  name: "Swarm Song",
  rarity: "Rare",
  tribe: "Danian",
  cost: 1,
  flavor: "The insects eclipsed the sun, turning day to night.",
  rules: [
    {
      rule: "",
      value: 15,
      description: "Deal 15 damage to target Creature."
    }
  ]
}, (err, mugic) => {
  console.log(mugic.name + ' Added!');
  process.exit(); //End script
})
*/
