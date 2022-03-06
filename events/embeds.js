module.exports = bot => {
    const Discord = require("discord.js");


    let guild = bot.guilds.cache.get('833258268208922644')
    let transcript = guild.channels.cache.find(x => x.name === 'transcripts')
    if (!transcript)
        return;

    let commandChannel = guild.channels.cache.find(x => x.id === '833259828767752193')
    if (!commandChannel)
        return transcript.send("L'ID du salon `ticketChannel` est incorrect");

    let helpChannel = guild.channels.cache.find(x => x.id === '833290586671808522')
    if (!helpChannel)
        return transcript.send("L'ID du salon `helpChannel` est incorrect");


    helpChannel.bulkDelete(100)
    commandChannel.bulkDelete(100)

    let commandEmbed = new Discord.MessageEmbed()
        .setAuthor('Passer commande')
        .setThumbnail("https://cdn.discordapp.com/attachments/704594714233536572/837268949376565258/Extarzionvente.png")
        .setDescription('Si vous avez regardé nos créations et choisi une offre, vous pouvez commander en cliquant sur la réaction ci-dessous.'
            + '\n\n:warning: Votre utilisation de nos services constitue votre acceptation de toutes nos conditions.')
        .setFooter('Copyright 2021-2022 © Nooxico#4244')
        .setColor('2f3136')

    // let commandEmbedSTOP = new Discord.MessageEmbed()
    //     .setAuthor('Passer commande')
    //     .setThumbnail("https://cdn.discordapp.com/attachments/704594714233536572/837268949376565258/Extarzionvente.png")
    //     .setDescription('Bonjour, nous sommes au regret de vous annoncer que les commandes sont actuellement suspendues.'
    //         + '\n\n:warning: Votre utilisation de nos services constitue votre acceptation de toutes nos conditions.')
    //     .setFooter('Copyright 2021-2022 © Nooxico#4244')
    //     .setColor('2f3136')

    let helpEmbed = new Discord.MessageEmbed()
        .setAuthor('Besoin d\'aide')
        .setThumbnail("https://cdn.discordapp.com/attachments/771407384882053142/837832024454332426/Extarzionaide.png")
        .setDescription('Si vous avez besoin d\'un renseignement ou d\'aide, vous pouvez ouvrir un dossier en cliquant sur la réaction ci-dessous.'
            + '\n\n:warning: Votre utilisation de nos services constitue votre acceptation de toutes nos conditions.')
        .setFooter('Copyright 2021-2022 © Nooxico#4244')
        .setColor('2f3136')

    if (helpChannel && commandChannel)
        return helpChannel.send(helpEmbed).then(async msg => {
            msg.react("📨")
            // commandChannel.send(commandEmbedSTOP)
            commandChannel.send(commandEmbed).then(async msg => {
                msg.react("🛒")
            })
        });
}