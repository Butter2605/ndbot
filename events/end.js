const createBot = require("../index");

module.exports = {
    name: 'end',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} reason
     */
    async execute (bot, reason) {
        console.log(`Bot đã mất kết nối tới server ${process.env.mc_host}, nguyên nhân: ${reason}`);
        console.log('Kết nối lại sau 15 giây')
        setTimeout(() => { createBot(); }, 15000)
    }
}