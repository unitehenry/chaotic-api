require('dotenv').config();

// Server
const port = process.env.PORT || 3000;
const path = require('path');
const express = require('express');
const app = express();

// Database
const mongoose = require('mongoose');
const dbuser = process.env.DATBASE_USER;
const dbpass = process.env.DATBASE_PASS;
const dbconfig = { useNewUrlParser: true, useUnifiedTopology: true }

if (dbuser && dbpass) {
    mongoose.connect(process.env.DATABASE_URL, dbconfig)
} else {
    mongoose.connect(`${dbuser}:${dbpass}@${process.env.DATABASE_URL}`, dbconfig);
}

const db = mongoose.connection;

// Routes
const cards = require('./routes/cards');
const creatures = require('./routes/creatures');
const attacks = require('./routes/creatures');
const battlegear = require('./routes/battlegear');
const locations = require('./routes/locations');
const mugic = require('./routes/mugic');

db.on('open', () => {
    app.use('/', cards); 
    app.use('/creatures', creatures);
    app.use('/attacks', attacks);
    app.use('/battlegear', battlegear);
    app.use('/locations', locations);
    app.use('/mugic', mugic);

    // Card Images
    app.get('/images/:set/:id', (req, res) => {
        const { set, id } = req.params;
        const img = path.join(__dirname, '..', 'assets', set, `${id}.png`);

        res.sendFile(img);
    });

    app.listen(port, () => console.log(`Chaotic API Server running on ${port}`));
})
