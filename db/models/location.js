//Chaotic Location Card

//Mongoose
const mongoose = require('mongoose');
/*
mongoose.connect('mongodb://localhost/chaotic');

const db = mongoose.connection;
db.on('open', () => { console.log('Connection Establised!') });
*/

//Location Schema
const LocationSchema = mongoose.Schema({
   name: String,
   set: String,
   rarity: String,
   id: Number,
   initiative: String,
   ability: String,
   flavor: String,
   unique: String,
   mirage: String,
   past: String,
   artist: String
});

//Location Model
const Location = module.exports = mongoose.model('Location', LocationSchema);

//New Location Entry
/*
Location.create({
  type: "Location",
  set: "Dawn of Perim",
  number: 231,
  name: "Wooden Pillar",
  rarity: "Super Rare",
  initiative: "Wisdom",
  flavor: "The Runic Grove takes root here, and UnderWorlders believe it grows even further down than up.",
  rules: [
    {
      rule: "",
      value: 1,
      description: "OverWorld Mugic Cards cost an additional Mugic counter to play."
    }
  ]
}, (err, location) => {
  console.log(location.name + ' Added!');
  process.exit(); //End script
})
*/
