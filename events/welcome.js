module.exports = bot => {
    const Discord = require('discord.js')

    bot.on('guildMemberAdd', async member => {

        let WelcomeChannel = member.guild.channels.cache.find(x => x.id === '833258268208922647');
        if (!WelcomeChannel) return;

        let WelcomeEmbed = new Discord.MessageEmbed()
            .setThumbnail("https://cdn.mee6.xyz/guild-images/833258268208922644/4cc4a3706b01330d7629778611798fe9f9a8585aef4d3b5c60c9f6bf40921ccd.png")
            .setAuthor('Extarzion Build', 'https://cdn.discordapp.com/attachments/771407384882053142/836160031178752041/LogoExtarzionbuild.png')
            .addField(`Heyy ${member.user.username}, bienvenue sur le serveur!`, ":star: Nous t'accueillons comme un Guest sur ce serveur ! :star:")
            .setFooter('© 2021 Nooxico. Tout droits réservés')

        WelcomeChannel.send(WelcomeEmbed)

        WelcomeChannel.send(`${member.user}`)

        let Role = member.guild.roles.cache.find(role => role.id === '833272126089723915');
        member.roles.add(Role)

    })
}