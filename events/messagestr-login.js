module.exports = {
    name: 'messagestr',
    once: true,
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} msg
     */
    async execute (bot, msg) {

        // login
        if (msg.includes('/dangky')) {
            bot.chat(`/dangky ${process.env.mc_passphrase}`);
        } else if (msg.includes('/login')) {
            bot.chat(`/login ${process.env.mc_passphrase}`);
        }
    }
}