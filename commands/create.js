const Discord = require("discord.js");
const { Client, ReactionCollector, MessageEmbed } = require('discord.js');
const client = new Client();

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.some(role => role.name === '*'))
        return;

    let category = message.channel.parentID
    if (category !== '833299907992617001')
        return;

    let guild = ('833258268208922644')

    let currentdate = new Date();
    let datetime = + currentdate.getDate() + "/"
        + (currentdate.getMonth() + 1) + "/"
        + currentdate.getFullYear() + ""


    message.delete()

    let avischannel = message.guild.channels.cache.find(x => x.id === "833259659112218625");
    if (!avischannel) return message.channel.send("Vous n'avez pas le salon requis")


    let embedBeforeedit = new MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/771407384882053142/837832030070767686/Extarzioncreation.png")
        .setTitle('Réalisé par Extarzion')
        .setURL("https://discord.bio/p/extarzion")
        .setFooter(`⏱️ Publié le ${datetime}`)
        .setColor('2f3136')

    let msgEmbedForEditing = await avischannel.send(embedBeforeedit)
    const msgawait = await message.channel.send("Veuillez patienter jusqu'à l'ajout de toutes les reactions.");
    await Promise.all(['🎫', '📝', '🖼️'].map(r => msgawait.react(r)));
    await msgawait.edit(`:ticket: : Nom de la map\n:newspaper: : Description\n:frame_photo: : Image`)

    const filterReaction = (reaction, user) => user.id === message.author.id && !user.bot;
    const filterMessage = (m) => m.author.id === message.author.id && !m.author.bot;
    const collectorReaction = await new ReactionCollector(msgawait, filterReaction);
    collectorReaction.on('collect', async reaction => {
        switch (reaction._emoji.name) {
            case '🎫':
                const msgQuestionAuthor = await message.channel.send('🎫Choisissez le nom de la map');
                const Author = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content;
                msgQuestionAuthor.delete();
                embedBeforeedit.setAuthor(`Map: ${Author}`, 'https://cdn.discordapp.com/attachments/704594714233536572/837269026773401610/LogoExtarzionbuild.png');
                msgEmbedForEditing.edit(embedBeforeedit).then(async message => {
                    let NewRole = await message.guild.roles.create({
                        data: {
                            name: Author,
                            color: '6871ab'
                        }
                    })
                })

                break;
            case '📝':
                const msgQuestionDescription = await message.channel.send('📝Faites une description de la map')
                const description = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content;
                msgQuestionDescription.delete();
                embedBeforeedit.setDescription(`:book: Description : ${description}\n\n──────────────────────────────\n\n`);
                msgEmbedForEditing.edit(embedBeforeedit);
                break;
            case '🖼️':
                const msgQuestionUrl = await message.channel.send('Envoyer le **lien** d\'une image.')
                var URL;

                var error = Boolean('false');
                do {
                    URL = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content;
                    if (!URL.startsWith('https://')) {

                        error = true;
                        message.channel.send("Vous devez envoyer une URL.")
                    } else {
                        error = false;
                    }

                } while (error)

                msgQuestionUrl.delete();
                embedBeforeedit.setImage(URL)
                msgEmbedForEditing.edit(embedBeforeedit)
                break;


        }
    })



}

module.exports.config = {
    name: 'create'
}