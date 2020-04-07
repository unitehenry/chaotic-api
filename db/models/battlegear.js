//Chaotic Battlegear Card

//Mongoose
const mongoose = require('mongoose');
/*
mongoose.connect('mongodb://localhost/chaotic');

const db = mongoose.connection;
db.on('open', () => { console.log('Connection Establised!') });
*/
//Battlegear Schema
const BattlegearSchema= mongoose.Schema({
  name: String,
  set: String,
  rarity: String,
  id: Number,
  ability: String,
  flavor: String,
  unique: String,
  loyal: String,
  legendary: String,
  past: String,
  shard: String,
  artist: String
});

//Battlegear Model
const Battlegear = module.exports = mongoose.model('Battlegear', BattlegearSchema);

//New Battlehear Entry
/*
Battlegear.create({
  type: "Battlegear",
  set: "Dawn of Perim",
  number: 164,
  name: "Windstrider",
  rarity: "Super Rare",
  rules: [
    {
      rule: "",
      value: 15,
      description: "Equipped Creature has \"Swift 2\"."
    },
    {
      rule: "",
      value: 0,
      description: "This Battlegear begins the game face-up."
    },
    {
      rule: "Swift",
      value: 2,
      description: ""
    }
  ]
}, (err, battlegear) => {
  console.log(battlegear.name + " Added!");
  process.exit(); //End script
})
*/
