const players = require('../models/players');

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
        players.findOne({ username: user }).then((data) => {
            if (data) {
                const joindate = data.joinDate;
                bot.chat(`> Người chơi ${user} đã tham gia server từ ngày ${joindate.getDate()}/${joindate.getMonth()+1}/${joindate.getFullYear()}`)
            }
        })
    }
}