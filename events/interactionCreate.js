const { Events, MessageFlags } = require('discord.js');

module.exports = {
    name: Events.InteractionCreate,
    async execute(client, interaction) {
        if (!interaction.isChatInputCommand()) return; // スラッシュコマンド以外は実行しない

        const command = client.commands.get(interaction.commandName);
        if (!command) return;

        try {
            await command.execute(interaction); // 実行
        } catch (error) {
            // エラー時の処理
            console.error(error);
            await interaction.reply({ content: 'コマンド実行中にエラーが発生しました', flags: MessageFlags.Ephemeral });
        }
    },
};