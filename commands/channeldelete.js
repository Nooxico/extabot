const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.some(role => role.name === '*'))
        return;

    let carrote = message.channel.name

    message.channel.delete()

    let transcript = message.guild.channels.cache.find(x => x.name === 'transcripts')
    if (!transcript) return (message.channel.send("Vous n'avez pas de salon `transcripts`"))


    let channeldeleted = new Discord.MessageEmbed()
        .setThumbnail("https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/joypixels/275/cross-mark_274c.png")
        .setAuthor('Salon supprimé', "https://cdn.discordapp.com/attachments/704594714233536572/837269026773401610/LogoExtarzionbuild.png")
        .setTitle(`Salon : ${carrote}`)
        .addFields(
            { name: ':bust_in_silhouette: Fermé par:', value: `${message.author.username}`, inline: true },
        )
        .setColor('2f3136')
        .setFooter('Copyright 2021-2022 © Nooxico#0001')

    transcript.send(channeldeleted)

}

module.exports.config = {
    name: 'delete'
}