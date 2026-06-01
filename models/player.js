const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    username: String,

    // joinDate
    joinDate: Date,
});

module.exports = mongoose.model('players', Schema);