module.exports = {
    name: 'eval',
    admin: true,
    /**
     * 
     * @param {import("mineflayer").Bot} bot 
     * @param {String} user 
     * @param {String} msg 
     * @param {String[]} args 
     */
    run: async (bot, user, args) => {
        eval(args.join(' '));
    }
}