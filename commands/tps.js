module.exports = {
    name: 'tps',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} user 
     * @param {String} msg 
     * @param {String[]} args 
     */
    run: async (bot, user, args) => {
        const tps = getTPS(bot.tablist.footer.toString());
        bot.whisper(user, `TPS (tablist): ${tps}`);
    }
}

function getTPS(footer) {
    return footer.match(/(\d+(?:\.\d+)?)\s*tps/i)?.[1] ?? null;
}