module.exports = {
    name: 'messagestr',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} msg
     */
    async execute (bot, msg) {
        console.log(msg);

        if (msg.includes('/2y2c') && msg.trim() !== "2Y2C >> Lệnh /2y2c không được phép") {
            setTimeout(() => {
                bot.chat('/2y2c');
                setTimeout(() => { bot.clickWindow(13,0,0) }, 1500)
            }, 3500)
        }
    }
}