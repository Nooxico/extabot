const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    let transcript = message.guild.channels.cache.find(x => x.name === 'logs-moderation')
    if (!transcript) return (message.channel.send("Vous n'avez pas de salon `logs-moderation`"))

    if (!message.member.roles.cache.some(role => role.name === '*'))
        return;

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!args[0])
        return;
    if (!member) return;

    let muteRole = message.guild.roles.cache.find(x => x.name === 'Muet')
    if (!muteRole) return message.guild.roles.create({
        data: ({
            name: "Muet",
            color: '818386',
        })
    }).then((muteRole) => {
        member.guild.channels.cache.forEach((channel) => {
            channel.updateOverwrite(muteRole, {
                "SEND_MESSAGES": false,
            })
        })
        member.roles.add(muteRole);
        return transcript.send(`${member} a été rendu muet par **${message.author.username}**.`)
    })

    if (muteRole) member.roles.add(muteRole);
    return transcript.send(`${member} a été rendu muet par **${message.author.username}**.`)



}
module.exports.config = {
    name: 'mute'
}