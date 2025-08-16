const { Events } = require('discord.js');

module.exports = {
    name: Events.MessageCreate,
    async execute(message) {
        // BOT自身のメッセージは無視
        if (message.author.bot) return;

        // 特定のワードに反応する機能
        if (message.content.includes('こんにちは')) {
            await message.channel.send('こんにちは'); // チャンネルに送信
            return;
        }

        if (message.content.includes('おはよう')) {
            await message.reply('おはようございます！'); // メッセージに返信
            return;
        }

        if (message.content.includes('さようなら')) {
             // 返信時にメンションをオフにしたいときはrepliedUserをfalseにする
            await message.reply({ content: 'さようなら〜', allowedMentions: { repliedUser: false } });
            return;
        }

        // オウム返し機能例
        // await message.channel.send(message.content);
    },
};