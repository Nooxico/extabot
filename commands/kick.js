const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (!message.member.roles.cache.some(role => role.name === '*'))
        return;

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!args[0])
        return message.channel.send("Merci de spécifier un utilisateur.");

    if (!member) return message.channel.send("Impossible de trouver l'utilisateur.");

    let reason = args.slice(1).join(" ");
    if (!reason) reason = 'Non spécifié';

    if (member.id === message.author.id)
        return message.channel.send("Vous ne pouvez pas vous expulser.");

    if (member.roles.cache.some(role => role.name === '*'))
        return message.channel.send("Vous ne pouvez pas expulser ce joueur.");

    member.kick({ reason: '' })

    let transcript = message.guild.channels.cache.find(x => x.name === 'logs-moderation')
    if (!transcript) return (message.channel.send("Vous n'avez pas de salon `logs-moderation`"))

    let transcriptembed = new Discord.MessageEmbed()
        .setThumbnail(message.author.displayAvatarURL({ dynamic: true, size: 512 }))
        .setAuthor('Membre expulsé', (message.author.displayAvatarURL({ dynamic: true, size: 512 })))
        .addFields(
            { name: ':bust_in_silhouette: Membre :', value: `${member}`, inline: true },
            { name: ':hash: Expulsé par:', value: `${message.author.username}`, inline: true },
        )
        .addField('Raison', `${reason}`)
        .setColor('E74C3C')
        .setFooter(`ID: ${member.id} ● Copyright 2021-2022 © Nooxico#4244`)

    transcript.send(transcriptembed)



}

module.exports.config = {
    name: 'kick'
}