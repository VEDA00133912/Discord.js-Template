// コマンド登録を行うファイル。いじる必要はない
const fs = require('fs');
const path = require('path');
const { REST, Routes } = require('discord.js');
const { clientId, guildId, token } = require('./config/config');

async function deployCommands() {
    const commands = [];
    const commandsPath = path.join(__dirname, 'commands');
    const commandFiles = fs.readdirSync(commandsPath).filter(f => f.endsWith('.js'));

    for (const file of commandFiles) {
        const command = require(path.join(commandsPath, file));
        commands.push(command.data.toJSON());
    }

    const rest = new REST({ version: '10' }).setToken(token);

    try {
        console.log('スラッシュコマンドを登録中...');

        if (guildId) {
            // guildId設定されてる場合はギルド単位登録
            await rest.put(
                Routes.applicationGuildCommands(clientId, guildId),
                { body: commands }
            );
            console.log(`ギルド (${guildId}) にスラッシュコマンド登録完了！`);
        } else {
            // グローバル登録
            await rest.put(
                Routes.applicationCommands(clientId),
                { body: commands }
            );
            console.log('グローバルスラッシュコマンド登録完了！');
        }

    } catch (error) {
        console.error('スラッシュコマンド登録エラー:', error);
    }
}

module.exports = { deployCommands };