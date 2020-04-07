//Chaotic Creature Card


//Mongoose
const mongoose = require('mongoose');
/*
mongoose.connect('mongodb://localhost/chaotic');

const db = mongoose.connection;
db.on('open', () => { console.log('Connection Establised!') });
*/

//Creature Schema

const CreatureSchema = new mongoose.Schema({
  name: String,
  set: String,
  rarity: String,
  id: Number,
  tribe: String,
  courage: Number,
  power: Number,
  wisdom: Number,
  speed: Number,
  energy: Number,
  mugic: Number,
  elements: String,
  types: String,
  ability: String,
  flavor: String,
  brainwashed: String,
  unique: String,
  loyal: String,
  legendary: String,
  gender: String
});

//Creature Model
const Creature = module.exports = mongoose.model('Creature', CreatureSchema);


//New Creature Entry
/*
Creature.create({
  type: "Creature",
  set: "Dawn of Perim",
  number: 3,
  name: "Blügon",
  rarity: "Rare",
  tribe: "OverWorld",
  flavor: "This small, scrappy spy maps enemy territory for the OverWorld's warriors.",
  stats: {
    energy: 50,
    mugic: 0,
    courage: 30,
    power: 65,
    wisdom: 60,
    speed: 105
  },
  abilities: [
    "1MC: Look at the top two cards of target player's Location Deck. Put one of them on top of that deck and the other on the bottom."
  ],
  elements: {
    fire: false,
    air: false,
    earth: false,
    water: false
  }
}, (err, creature) => {
  console.log(creature);
  process.exit(); //End Script
});
*/
