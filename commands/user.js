const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    let UserEmbed = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
        .addFields(
            { name: ':bust_in_silhouette: Pseudo :', value: `${message.author.username}`, inline: true },
            { name: ':hash: HashTag :', value: `#${message.author.discriminator}`, inline: true },
            { name: ':pencil2: ID :', value: `${message.author.id}`, inline: true }
        )
        .addFields(
            { name: ':tools: Compte créé le :', value: `${message.author.createdAt}`, inline: true },
            { name: ':tools: À rejoint le discord le :', value: `${message.member.joinedAt}`, inline: true }
        )
        .setFooter('Copyright 2021-2022 © Nooxico#4244')
        .setColor('2f3136')

    message.channel.send(UserEmbed)
}

module.exports.config = {
    name: 'user'

}