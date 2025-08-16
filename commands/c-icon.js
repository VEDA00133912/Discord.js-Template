// コンテキストメニューの例
const { ContextMenuCommandBuilder, ApplicationCommandType, EmbedBuilder, MessageFlags, Colors, InteractionContextType, ApplicationIntegrationType } = require('discord.js');

module.exports = {
    data: new ContextMenuCommandBuilder()
        .setName('アイコン表示')
        .setType(ApplicationCommandType.Message) // タイプを指定(User, Message)
        .setContexts([InteractionContextType.Guild, InteractionContextType.BotDM, InteractionContextType.PrivateChannel])
        .setIntegrationTypes([ApplicationIntegrationType.GuildInstall, ApplicationIntegrationType.UserInstall]),

    async execute(interaction) {
        const targetUser = interaction.targetMessage.author;
        const avatarUrl = targetUser.displayAvatarURL({ forceStatic: false, size: 1024 });

        // 埋め込みを作成
        const embed = new EmbedBuilder()
            .setTitle(`${targetUser.username}のアイコン`)
            .setImage(avatarUrl)
            .setColor(Colors.Aqua);

        // MessageFlags.Ephemeralを使うことで自分だけに見えるコマンドになる
        await interaction.reply({ embeds: [embed], flags: MessageFlags.Ephemeral });
    },
};