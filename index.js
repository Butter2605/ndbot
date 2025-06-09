const mineflayer = require('mineflayer')
require('dotenv').config();
const env = process.env;
const mongoose = require('mongoose');

function createBot() {
    // init everything
    const bot = mineflayer.createBot({
        host: env.mc_host,
        username: env.mc_username,
        hideErrors: false,
        version: 763, // protocol version 1.20.1
    });

    bot.commands = [];
    bot.aliases = [];
    require(`./handler/handler`)(bot);

}
module.exports = createBot;
createBot()

// mongodb
const mongooseConnectionString = process.env.mongodb;
if (!mongooseConnectionString) return;

mongoose.connect(mongooseConnectionString).then(() => console.log('Connected to mongodb'));