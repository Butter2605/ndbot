const fs = require('fs');

module.exports = {
    name: 'help',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} user 
     * @param {String} msg 
     * @param {String[]} args 
     */
    run: async (bot, user, args) => {
        let commands = [];
        fs.readdirSync('./commands').filter(file => file.endsWith('.js') && !file.startsWith('admin')).forEach(file => {
            let fileName = file.substring(0, file.indexOf('.js'));
            commands.push(fileName);
        });

        bot.whisper(user, `Các lệnh hiện có: ${commands.map(cmd => `!${cmd}`).join(', ')}`);
    }
}