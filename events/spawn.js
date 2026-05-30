module.exports = {
    name: 'spawn',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     */
    async execute (bot) {
        if (bot.step != '2Y2C') {
            setTimeout(function() {
                bot.chat(`/register ${process.env.mc_passphrase} ${process.env.mc_passphrase}`);
            }, 3500);

            setTimeout(function() {
                bot.chat(`/login ${process.env.mc_passphrase}`);
            }, 6500);
        }
    }
}