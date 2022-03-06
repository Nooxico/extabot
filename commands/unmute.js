const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    let transcript = message.guild.channels.cache.find(x => x.name === 'logs-moderation')
    if (!transcript) return (message.channel.send("Vous n'avez pas de salon `logs-moderation`"))

    if (!message.member.roles.cache.some(role => role.name === '*'))
        return;

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    if (!args[0])
        return message.channel.send("Merci de spécifier un utilisateur.");
    if (!member) return message.channel.send("Impossible de trouver l'utilisateur.");

    let Role = message.guild.roles.cache.find(x => x.name === 'Muet')
    if (!Role)
        return;

    let muteRole = member.roles.cache.some(role => role.name === 'Muet')
    if (!muteRole)
        return message.channel.send("Ce membre n'est pas muet.")

    if (muteRole) member.roles.remove(Role);
    return transcript.send(`${member} a été unmute par **${message.author.username}**.`)

}
module.exports.config = {
    name: 'unmute'
}