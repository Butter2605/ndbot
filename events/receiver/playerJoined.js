const players = require("../../models/player");
const offlineWhisper = require('../../models/offlineWhisper');
module.exports = {
    name: 'playerJoined',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {import("mineflayer").Player} player 
     */
    async execute(bot, player) {
        // joinDate
        players.findOne({
            username: player.username
        }).then(data => {
            if (!data) {
                const newPlayer = new players({
                    username: player.username,
                    joinDate: new Date(),
                    offlineWhisper: ''
                });
                return newPlayer.save().then(
                    () => {
                        console.log(`Người chơi ${player.username} đã được tạo dữ liệu trên database`);
                    }).catch(err => {
                    console.log('Lỗi khi lưu người chơi mới:', err);
                });
            }
        }).catch(err => {
            throw err; // Hoặc log lỗi nếu không muốn crash
        });

        // offlineWhisper
        const offlineMsgs = await offlineWhisper.findOne({ username: player.username });
        if (offlineMsgs && offlineMsgs.messages.length > 0) {
            for (const msg of offlineMsgs.messages) {
                bot.whisper(player.username, `${msg.sender} đã nhắn cho bạn: ${msg.content}`);
            }
            
            await offlineWhisper.deleteOne({ username: player.username });
        }
    }
}