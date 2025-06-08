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
        if (msg.includes('/register')) {
            bot.chat(`/register ${process.env.passphrase} ${process.env.passphrase}`);
            logged = true
        } else if (msg.includes('/login')) {
            bot.chat(`/login ${process.env.passphrase}`);
            logged = true
        }

        if (msg.includes('/avn')) {
            setTimeout(() => {
                bot.chat('/avn');
                setTimeout(() => { bot.clickWindow(13,0,0) }, 5000)
            }, 3500)
        }
    }
}