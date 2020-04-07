// Configuration
require('dotenv').config();

// Dependencies
const fs = require('fs');
const path = require('path');
const csv = require('csvtojson');
const mongoose = require('mongoose');

// Models
const Creature = require('./models/creature');
const Battlegear = require('./models/battlegear');
const Attack = require('./models/attack');
const Location = require('./models/location');
const Mugic = require('./models/mugic');

/**
 * Get the CSV files to be imports
 * @returns {Promise} Resolves with path to CSV files
 */
function getFiles() {

    return new Promise((res, rej) => {
        const importDir = path.join(__dirname, 'csv');
        fs.readdir(importDir, (err, files) => {
            const readFiles = files ? files.filter(f => f.includes('.csv')) : [];
            const importFiles = readFiles.map(f => path.join(__dirname, 'csv', f));
            err ? rej(err) : res(importFiles);
        })
    })

}

/**
 * Gets data from CSV file
 * @param {String} path Path to get CSV data from
 * @returns {Promise} Resolves with data of file
 */
function getData(path) {

    return new Promise((res, rej) => {
        csv().fromFile(path).then(data => {
            data ? res(data) : rej(false);
        })
    })

}

/**
 * Get mongoose model for card type 
 * @param {String} type Type of card to get model of
 * @returns {ClassDecorator} Mongoose class 
 */
function getModel(type) {

    switch (type) {
        case 'creatures':
            return Creature;
            break;
        case 'attacks':
            return Attack;
            break;
        case 'battlegear':
            return Battlegear;
            break;
        case 'locations':
            return Location;
            break;
        case 'mugic':
            return Mugic;
            break;
        default:
            return false;
    }

}

/**
 * Get card type from file path 
 * @param {String} path Path of file to get card type of
 * @returns {String} Type of card
 */
function getType(path) {
    const type = path.split('/').pop().split('.')[0];
    return type || '';
}

/**
 * Imports the file at specified path to database
 * @param {String} path Path to the file 
 */
async function runImport(path) {
    const type = getType(path);
    const Model = getModel(type);

    const data = await getData(path);

    if (type && Model) {
        Model.insertMany(data, { ordered: false}, (err, docs) => {
            if (err) {
                console.warn(`Could not import ${type.toUpperCase()}`);
            } else {
                console.log(`Succesfuly imported ${docs.length} ${type.toUpperCase()}`);
            }
        });
    }

}

function establishConnection() {
    const url = process.env.DATABASE_URL;
    const user = process.env.DATABASE_USER;
    const pass = process.env.DATABASE_PASS;

    const config = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }

    if(user && pass) {
        mongoose.connect(`${user}:${pass}@${url}`, config);
    } else {
        mongoose.connect(url, config);
    }

}

async function main() {
    establishConnection();

    const db = mongoose.connection;

    if (db) {

        db.on('error', console.error.bind(console, 'connection error:'));

        db.on('open', async () => {
            console.log('Connected to Database'); 
            
            const files = await getFiles();
            files.forEach(path => runImport(path));
        })

    }

}

main();