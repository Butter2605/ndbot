const players = require("../models/players")
module.exports = {
    name: 'playerJoined',
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {import("mineflayer").Player} player 
     */
    async execute(bot, player) {
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
    }
}