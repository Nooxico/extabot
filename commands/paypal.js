const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (!message.member.roles.cache.find(x => x.name === '*'))
        return;

    const everyone = message.guild.roles.everyone

    let logopaypal = message.guild.emojis.cache.find(emoji => emoji.name === 'paypal');
    let logogmail = message.guild.emojis.cache.find(emoji => emoji.name === 'gmail');
    let logointernet = message.guild.emojis.cache.find(emoji => emoji.name === 'internet');

    let paypal100 = args.join("")
    let paypal100embed = new Discord.MessageEmbed()
        .setAuthor("Confirmation d'achat à 100 %")
        .setThumbnail('https://emoji.discord.st/emojis/ad7c68be-03d6-4eb2-883e-cc427fda4d81.gif')
        .setDescription("Bonjour, nous vous remercions pour votre confiance, et \nvotre enthousiasme à notre égard.\n\n"
            + `Voici ci-joint le dossier contenant votre commande.\n\n[__Clique pour télécharger !__](${paypal100})`)
        .setColor('2f3136')
    if (paypal100)
        return message.channel.send(paypal100embed);

    var d = new Date,
        dformat = [d.getDate() + 1,
        d.getMonth() + 1,
        d.getFullYear()].join('/');

    let CmdSalon = message.guild.channels.cache.find(channel => channel.name === '🧰・conditions')
    if (!CmdSalon)
        return console.log(`Le salon ${CmdSalon} n'a pas été trouvé.`)

    message.channel.updateOverwrite(everyone, {
        SEND_MESSAGES: false
    })

    let paypalembed = new Discord.MessageEmbed()
        .setAuthor('Premier paiement')
        // .setThumbnail('https://s1.qwant.com/thumbr/0x380/b/9/7de28b120050a2b9e40a1a571e3d46725d576e81f93df6b98c96112120c604/250_Paypal_logo-512.png?u=https%3A%2F%2Fcdn4.iconfinder.com%2Fdata%2Ficons%2Flogos-and-brands%2F512%2F250_Paypal_logo-512.png&q=0&b=1&p=0&a=0')
        .addFields(
            { name: `${logopaypal} Etape :`, value: 'Paiment de 50%', inline: true },
            { name: ':toolbox: À lire :', value: `${CmdSalon}`, inline: true },
            { name: ':calendar: Date', value: `${dformat}`, inline: true },
        )
        .addFields(
            { name: `${logogmail} Adresse d'envoie :`, value: 'extarzion.mojang@gmail.com', inline: true },
            { name: `${logointernet} Site :`, value: '[Envoyer de l\'argent](https://www.paypal.com/myaccount/transfer/)', inline: true },
        )
        .setColor('2f3136')
    message.channel.send(paypalembed).then(async message => {
        message.react("💸")
    })
    message.channel.send('> Votre paiement est en cours de confirmation... Veuillez patienter.')
    message.channel.send('@here').then(async message => {
        message.delete()
    })


}

module.exports.config = {
    name: 'paypal'
}