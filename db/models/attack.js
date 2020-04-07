//Chaotic Attack Card

//Mongoose
const mongoose = require('mongoose');
/*
mongoose.connect('mongodb://localhost/chaotic');

const db = mongoose.connection;
db.on('open', () => { console.log('Connection Establised!') });
*/

//Attack Schema
const attackSchema = mongoose.Schema({
  name: String,
  set: String,
  rarity: String,
  id: Number,
  bp: Number,
  base: Number,
  fire: Number,
  air: Number,
  earth: Number,
  water: Number,
  ability: String,
  flavor: String,
  unique: Number,
  artist: String
});

//Atack Model
const Attack = module.exports = mongoose.model('Attack', attackSchema);

//New Atack Entry
/*
Attack.create({
  type: "Attack",
  set: "Dawn of Perim",
  number: 135,
  name: "Windslash",
  rarity: "Uncommon",
  buildPoints: 1,
  stats: {
    attack: 5,
    fire: 0,
    air: 0,
    earth: 0,
    water: 0,
  },
  rules: [
    {
      rule: "",
      value: 0,
      description: "Your opponent turns all face‐down Battlegear Cards they control face up."
    }
  ],
}, (err, attack) => {
  console.log(attack.name + ' Added!');
  process.exit(); //End script
});
*/
