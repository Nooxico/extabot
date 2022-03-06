const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (!message.member.roles.cache.some(role => role.name === '*'))
        return;

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

    if (!args[0])
        return message.channel.send("Merci de spécifier un utilisateur.");

    if (!member) return message.channel.send("Impossible de trouver l'utilisateur.");

    message.channel.createOverwrite(member, {
        "VIEW_CHANNEL": false,
    });

    let addChannel = message.channel.id

    let channel = message.guild.channels.cache.find(x => x.id === `${addChannel}`)
    if (!channel) return;

    message.channel.send(`${member} ne peut plus voir le salon ${channel} !`)


}

module.exports.config = {
    name: 'remove'
}