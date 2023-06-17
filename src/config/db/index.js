const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/nodejs_toturial');
        console.log("Connect to database sucessfully !!");
    } catch (error) {
        console.log("Connect failed !!");
    }
}

module.exports =  { connect };
