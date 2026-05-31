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
                bot.whisper(user, `Ngày tham gia (tính từ 31/5/2026): ${joindate.getDate()}/${joindate.getMonth()+1}/${joindate.getFullYear()}`)
            }
        })
    }
}