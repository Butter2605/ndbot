const mongoose = require('mongoose');

let Schema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },

    // offline Whisper
    messages: [{
        sender: { type: String, required: true },
        content: { type: String, required: true },
        sentAt: { type: Date, default: Date.now },
    }]
});

module.exports = mongoose.model('offlineWhispers', Schema);