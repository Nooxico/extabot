module.exports = bot => {

    const channelId = '852215536321822722'

    const updateMembers = guild => {
        const channel = guild.channels.cache.get(channelId)
        channel.setName(`Membres: ${guild.memberCount}`)
    }

    bot.on('guildMemberAdd', member => updateMembers(member.guild))
    bot.on('guildMemberRemove', member => updateMembers(member.guild))

    const guild = bot.guilds.cache.get('833258268208922644')
    updateMembers(guild)

}