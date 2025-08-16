// スラッシュコマンドの例
const { SlashCommandBuilder, InteractionContextType, ApplicationIntegrationType } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('ping')
        .setDescription('Ping!')
        .setContexts([InteractionContextType.Guild]) // 使用場所を指定(Guild, BotDM, PrivateChannel)
        .setIntegrationTypes([ApplicationIntegrationType.GuildInstall]), // GuildInstallとUserInstallを選択(両方も可)
        
    async execute(interaction) {
        await interaction.reply('Pong!');
    },
};