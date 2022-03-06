const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (!message.member.roles.cache.find(x => x.name === '*'))
        return;

    let reactionOne = message.guild.emojis.cache.find(emoji => emoji.name === 'check')
    let reactionTwo = message.guild.emojis.cache.find(emoji => emoji.name === 'discord')
    let CmdSalon = message.guild.channels.cache.find(channel => channel.name === '💻・cmd')

    let rulesEmbed = new Discord.MessageEmbed()
        .setTitle('━━━━━━━━━━━━━━━━━━━━')
        .setThumbnail("https://cdn.discordapp.com/attachments/771807326415618110/838372728934236160/pngegg.png")
        .setAuthor('Règlement Discord', "https://cdn.discordapp.com/emojis/817827789318389781.gif?v=1")
        .addField(`${reactionOne}  **Préambule**`, '.\n⇨ Toute personne utilisant les plateformes de ExtarzionBuild, notamment Discord, se doit d\'avoir lu et accepté ce règlement ci - présent.\n\nNous considérons que tout utilisateur accepte le règlement à partir du moment où il utilise nos plateformes. Ils est donc impossible de prétendre ne pas avoir pris connaissance du règlement.'
            + '\n\n⇨ Toute décision prise par les Administrateurs est incontestable'
            + '\n\n⇨ Nous nous accordons le droit de modifier ce règlement sans préavis. Merci de lire ce présent règlement régulièrement afin de ne pas manquer un potentiel changement.'
            + '\n\n\n━━━━━━━━━━━━━━━━━━━━━━━')
        .addField(`${reactionOne}  **Article 1 : Responsabilité du joueur**`, '.\n1.1    ⇨   Il vous est indispensable de respecter l\'éthique du serveur.De ce fait, vous devez avoir un pseudo et une photo de profil correct (voir 2.2 Respect des joueurs). '
            + '\n\nDe plus, le système de mute et de bannissement a été mis en place pour de très bonnes raisons.'
            + '\n\n\n━━━━━━━━━━━━━━━━━━━━━━━')
        .addField(`${reactionOne} **Article 2 : Les salons écrits**`, '.\n2.1    ⇨   La pollution visuelle :  Toute pollution visuelle telle que le spam ou le flood est interdite.'
            + `L’utilisation des bots Discord en dehors du salon ${CmdSalon} est interdite.`
            + '\n\n2.2   ⇨   Le respect des joueurs :  Tout acte visant à blesser une personne ou un groupe de personnes, telles que les insultes, les menaces, les moqueries, les'
            + 'critiques non - constructives(etc.) sont à proscrire. De même, il est strictement interdit de tenir des propos racistes, antisémites, misogynes, ou incitant à la haine.'
            + '\n\nToute forme d\'images ou de contenu à caractère sexuel est strictement interdit.L‘usurpation d\'identité est également interdite.'
            + 'La divulgation d\'informations privées (prénom, nom de famille, adresse, adresse IP ...) ce résultera d’un bannissement.'
            + '\n\n2.3   ⇨   La publicité :  Sur les différentes plateformes de ExtarzionBuild, il vous est interdit de faire toutes formes de publicités. '
            + '\n\n2.4   ⇨   Le langage :  Le langage Sms/texto est prohibé.'
            + '\n\n\n━━━━━━━━━━━━━━━━━━━━━━━')
        .addField(`${reactionOne}  **Article 3 : Les channels vocaux**`, '.\n3.1    ⇨   La pollution auditive :  Tout acte visant à nuire la bonne écoute dans un channel vocal est interdite. Ils vous est donc interdit l’utilisation des'
            + 'soundboards, Sons nuisibles, Modificateur de voix et le spam abusif de join / leave etc.'
            + '\n\n3.2    ⇨   Le respect des joueurs :  Référez-Vous à la partie 2.2 Respect des joueurs. Toutes les règles citées dans cette partie s\'appliquent aussi aux channels vocaux.'
            + '\n\n\n━━━━━━━━━━━━━━━━━━━━━━━')
        .setColor('2f3136')
        .setFooter(`TOS : https://discord.com/terms ● Copyright 2021-2022 © Nooxico#4244`)

    message.channel.send(rulesEmbed).then(async message => {
        message.react(reactionOne)
    })

}

module.exports.config = {
    name: 'rules'
}