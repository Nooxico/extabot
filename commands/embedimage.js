const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (!message.member.roles.cache.find(x => x.name === '*'))
        return;

    let imageurl = args.join()
    if (!args[0])
        return message.channel.send("Merci de spécifier une image\nExemple: **!image** *lien* *titre* ");

    let embedimage = new Discord.MessageEmbed()
        .setImage(imageurl)
        .setColor('2f3136')
        .setFooter('By Extarzion', 'https://cdn.discordapp.com/attachments/704594714233536572/851540430603550770/LogoExtarzionbuild.png')
    message.channel.send(embedimage)
}

module.exports.config = {
    name: 'image'
}