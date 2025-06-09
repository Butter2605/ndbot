const fs = require('fs');
const mongoose = require('mongoose');
require('dotenv').config();

/**
 * 
 * @param {import('mineflayer').Bot} bot 
 */
module.exports = async (bot) => {
    // commands
    fs.readdirSync('./commands').filter(f => f.endsWith('.js')).forEach(file => {
        const command = require(`../commands/${file}`);
        if (command.run)
            bot.commands.push(command);
    });

    // events
    fs.readdirSync('./events').filter(f => f.endsWith('.js')).forEach(file => {
        const event = require(`../events/${file}`);
        bot.on(event.name, (...args) => {event.execute(bot, ...args)});
    });
}