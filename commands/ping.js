module.exports = {
    name: 'ping',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} user 
     * @param {String} msg 
     * @param {String[]} args 
     */
    run: async (bot, user, args) => {
        bot.whisper(user, `Ping: ${bot.players[user].ping}ms`);
    }
}