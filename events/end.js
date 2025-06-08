const createBot = require("../index");

module.exports = {
    name: 'end',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} reason
     */
    async execute (bot, reason) {
        console.log(`Bot đã mất kết nối tới server ${process.env.host}, nguyên nhân: ${reason}`);
        console.log('Kết nối lại sau 5 giây')
        setTimeout(() => createBot, 5000)
    }
}