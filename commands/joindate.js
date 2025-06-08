module.exports = {
    name: 'joindate',
    aliases: ['jd'],
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} user 
     * @param {String} msg 
     * @param {String[]} args 
     */
    run: async (bot, user, args) => {
        bot.chat(`> Ping của ${user} hiện tại là: ${bot.players[user].ping}ms`);
    }
}