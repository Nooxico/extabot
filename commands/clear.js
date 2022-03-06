const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.some(role => role.name === '*'))
        return;

    message.delete()

    let clear = args.join(" ")

    let channel = message.guild.channels.id
    let cdseconds = 5

    if (!clear)
        return (message.channel.send("Veuillez spécifier le nombre de message à supprimer !"));

    message.channel.bulkDelete(args[0]).then(() => {

        if (!args[0]) return;

        message.channel.send(`J'ai supprimé \`${args} message(s)\`.`).then(() => {
            setTimeout(() => {
                message.channel.bulkDelete(1)
            }, cdseconds * 750)
        })

    })

}

module.exports.config = {
    name: 'clear'
}