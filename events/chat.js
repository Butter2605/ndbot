module.exports = {
    name: 'chat',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} msg 
     * @param {String} user 
     */
    async execute (bot, user, msg) {
        let prefix = '!'
        if (!msg.startsWith(prefix)) return
        var args = msg.slice(prefix.length).trim().split(/ +/g);
        var cmd = args.shift().toLowerCase();
        var command = bot.commands.find(c => 
        c.name === cmd || (c.aliases && c.aliases.includes(cmd))
        );

        if (command.run) {
            command.run(bot, user, args);
        }
    }
}