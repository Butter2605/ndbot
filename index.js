const mineflayer = require('mineflayer')
require('dotenv').config();
const env = process.env;
const mongoose = require('mongoose');

function createBot() {
    // init everything
    const bot = mineflayer.createBot({
        host: env.host,
        username: env.username,
        hideErrors: false,
        version: 763, // protocol version 1.20.1
    });

    bot.commands = [];
    bot.aliases = [];
    require(`./handler/handler`)(bot);

}
module.exports = createBot;
createBot()