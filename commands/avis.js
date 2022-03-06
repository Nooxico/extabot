const Discord = require("discord.js");
const { Client, ReactionCollector, MessageEmbed } = require('discord.js');
const client = new Client();

module.exports.run = async (bot, message, args, user,) => {

    if (!message.member.roles.cache.some(role => role.id === '833272275901218817'))
        return;

    let category = message.channel.parentID
    if (category !== '833294741805596713')
        return;


    message.delete()

    let avischannel = message.guild.channels.cache.find(x => x.id === "836747767669063701");
    if (!avischannel) return message.channel.send("Vous n'avez pas le salon requis")


    let embedBeforeedit = new MessageEmbed()
        .setAuthor(`${message.author.username}`, (message.author.displayAvatarURL({ dynamic: true, size: 512 })))
        .setThumbnail("https://cdn.discordapp.com/attachments/771407384882053142/837832029613064202/Extarzionavisclient.png")
        .setFooter('Copyright 2021-2022 © Nooxico#4244')
        .setColor('2f3136')

    let msgEmbedForEditing = await avischannel.send(embedBeforeedit)
    const msgawait = await message.channel.send("Veuillez patienter jusqu'à l'ajout de toutes les reactions.");
    await Promise.all(['🏗️', '🖋️', '⭐'].map(r => msgawait.react(r)));
    await msgawait.edit(`:construction_site: : Nom de la map\n:pen_ballpoint: : Votre commentaire\n:star: : Mettre votre note`)

    const filterReaction = (reaction, user) => user.id === message.author.id && !user.bot;
    const filterMessage = (m) => m.author.id === message.author.id && !m.author.bot;
    const collectorReaction = await new ReactionCollector(msgawait, filterReaction);
    collectorReaction.on('collect', async reaction => {

        switch (reaction._emoji.name) {
            case '🏗️':

                const msgQuestionTitle = await message.channel.send('🏗️Quelle map avez vous payé ?');
                const Title = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content;
                msgQuestionTitle.delete();
                embedBeforeedit.addField('Nom du build', Title);
                msgEmbedForEditing.edit(embedBeforeedit);
                break;
            case '🖋️':

                const msgQuestionDescription = await message.channel.send('🖋️Quel est votre commentaire sur la commande ?')
                const description = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content;
                msgQuestionDescription.delete();
                embedBeforeedit.addField('Commentaire', description);
                msgEmbedForEditing.edit(embedBeforeedit);
                break;
            case '⭐':

                const msgQuestionNote = await message.channel.send('⭐Notez notre service (mettre un chiffre entre 1 et 5)')
                var note;

                var error = Boolean('false');
                do {
                    note = (await message.channel.awaitMessages(filterMessage, { max: 1, time: 60000 })).first().content;
                    if (note !== "1" && note !== "2" && note !== "3" && note !== "4" && note !== "5") {

                        error = true;
                        message.channel.send("Veuillez entrer un chiffre entre **1 et 5** !")
                    } else {
                        error = false;
                    }

                } while (error)

                msgQuestionNote.delete();
                embedBeforeedit.addField('Note', `${note} ⭐`);
                msgEmbedForEditing.edit(embedBeforeedit);
                break;


        }
    })




}

module.exports.config = {
    name: 'avis'
}