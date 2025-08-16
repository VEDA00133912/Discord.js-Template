const { Events, MessageFlags } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(client, interaction) {
        // スラッシュコマンド
        if (interaction.isChatInputCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: 'コマンド実行中にエラーが発生しました',
                    flags: MessageFlags.Ephemeral,
                });
            }
        } 
        // コンテキストメニュー
        else if (interaction.isContextMenuCommand()) {
            const command = client.commands.get(interaction.commandName);
            if (!command) return;

            try {
                await command.execute(interaction);
            } catch (error) {
                console.error(error);
                await interaction.reply({
                    content: 'コマンド実行中にエラーが発生しました',
                    flags: MessageFlags.Ephemeral,
                });
            }
        }
    },
};