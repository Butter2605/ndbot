const { messages } = require('../../data.json');

module.exports = {
    name: 'spawn',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     */
    async execute (bot) {
        setTimeout(function() {
            bot.chat(`/register ${process.env.mc_passphrase} ${process.env.mc_passphrase}`);
        }, 3500);

        setTimeout(function() {
            bot.chat(`/login ${process.env.mc_passphrase}`);
        }, 6500);

        // setInterval(function() {
        //     let rngMsg = messages[Math.floor(Math.random() * messages.length)];
        //     bot.chat(rngMsg);
        // }, 15*60*1000)
    }
}