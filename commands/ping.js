const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    message.channel.send(`🏓Ping: **${Date.now() - message.createdTimestamp}ms**.`);
}

module.exports.config = {
    name: 'ping'

}