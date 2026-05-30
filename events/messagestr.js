module.exports = {
    name: 'messagestr',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} msg
     */
    async execute (bot, msg) {
        console.log(msg);
        let logged = false;

        // login
        if (msg.includes('/dangky')) {
            bot.chat(`/dangky ${process.env.mc_passphrase}`);
            logged = true
        } else if (msg.includes('/login')) {
            bot.chat(`/login ${process.env.mc_passphrase}`);
            logged = true
        }

        if (msg.includes('/2y2c') && bot.step == 'Auth') {
            setTimeout(() => {
                bot.chat('/2y2c');
                setTimeout(() => { bot.clickWindow(13,0,0) }, 1500)
            }, 3500)
        }

        if (msg.trim() === 'đang vào 2Y2C...') {
            bot.step = '2Y2C';
        }
    }
}