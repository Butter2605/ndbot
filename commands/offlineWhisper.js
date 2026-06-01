const offlineWhisper = require('../models/offlineWhisper');

module.exports = {
    name: 'offlineWhisper',
    aliases: ['ow', 'w', 'msg'],
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} user 
     * @param {String} msg 
     * @param {String[]} args 
     */
    run: async (bot, user, args) => {
        if (args.length < 2) return bot.whisper(user, 'Cách dùng: !offlineWhisper <green>(người nhận)</green> <yellow>(nội dung tin nhắn)</yellow>');

        const receiver = args[0];
        const content = args.slice(1).join(' ');

        let data = await offlineWhisper.findOne({ username: receiver });

        if (!data) {
            data = new offlineWhisper({ username: receiver, messages: [], });
        }

        data.messages.push({ sender: user, content, });
        await data.save();

        bot.whisper(user, `Đã lưu lại tin nhắn cho ${receiver}.`);
    }
}