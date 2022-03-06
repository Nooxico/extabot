module.exports = bot => {
    const Discord = require("discord.js");

    bot.on("message", async message => {

        if (message.author.bot) return;
        if (message.channel.type === "dm") return;
        if (message.content.startsWith("!"))
            return;

        let Suggestchannel = message.guild.channels.cache.find(x => x.id === "837425520542089248")
        if (!Suggestchannel) return;

        let suggest = (message.channel === (Suggestchannel))
        if (!suggest) return;

        let suggestmsg = message.content

        message.delete()

        let currentdate = new Date();
        let datetime = + currentdate.getDate() + "/"
            + (currentdate.getMonth() + 1) + "/"
            + currentdate.getFullYear() + ""

        let suggestembed = new Discord.MessageEmbed()
            .setAuthor('Suggestion')
            .setThumbnail("https://cdn.discordapp.com/attachments/771407384882053142/837832020155564072/Extarzionsuggestion.png")
            .addFields(
                { name: ':bust_in_silhouette: Pseudo :', value: `${message.author.username}`, inline: true },
                { name: ':pencil2:  Envoyé le :', value: `${datetime}`, inline: true }
            )
            .addFields(
                { name: ':bulb: Suggestion', value: `${suggestmsg}` }
            )
            .setFooter('Copyright 2021-2022 © Nooxico#4244')
            .setColor('2f3136')

        Suggestchannel.send(suggestembed).then(async message => {
            let reactionEmoji = message.guild.emojis.cache.find(emoji => emoji.name === 'valid');
            let reactionEmojiTwo = message.guild.emojis.cache.find(emoji => emoji.name === 'refus');
            await message.react(reactionEmoji);
            await message.react(reactionEmojiTwo);
        })

        let suggestembedPV = new Discord.MessageEmbed()
            .setAuthor(`Suggestion envoyée sur ${message.guild.name}`)
            .setThumbnail("https://cdn.discordapp.com/attachments/771407384882053142/837832020155564072/Extarzionsuggestion.png")
            .addFields(
                { name: ':bulb: Votre suggestion', value: `${suggestmsg}` }
            )
            .setFooter(`Votre suggestion a bien été evoyée ! - Le ${datetime}`)
            .setColor('2f3136')

        message.author.send(suggestembedPV)

        let Suggestchannelalert = message.guild.channels.cache.find(x => x.id === "833258268654698498")
        if (!Suggestchannelalert) return;

        Suggestchannelalert.send(`${message.author.username} a fait une suggestion ! \(${Suggestchannel}\)`)

    })

}