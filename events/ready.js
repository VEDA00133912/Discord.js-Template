const { Events } = require('discord.js');
const { deployCommands } = require('../deploy-commands');

module.exports = {
    name: Events.ClientReady,
    once: true,

    async execute(client) {
        console.log(`${client.user.tag} is Online!`);
        await deployCommands(); // 起動時にコマンド登録処理を呼び出し
    },
};