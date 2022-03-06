const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    if (!message.member.roles.cache.some(role => role.name === '*'))
        return;

    message.delete()

    let offreEmbed = new Discord.MessageEmbed()
        .setThumbnail("https://cdn.discordapp.com/attachments/771407384882053142/837832016073850940/Extarzionoffre.png")
        .setDescription("__**Voici les différentes offres que nous proposons :**__\n\n\n__**Offre Standart (Spawn) :**__\n\n🚧 **Spawn :** `100x`,`150x`,`200x`\n🖋️ **Retouches :** `3`\n⭐ **Spécial :** `x1 Organique`\n💸 **Prix :** `20€`,`25€`,`30€`"
            + "\n\n\n__**Offre Premium (Spawn) :**__\n\n🚧 **Spawn :** `100x`,`150x`,`200x`\n🖋️ **Retouches :** `6`\n⭐ **Spécial :** `x2 Organiques`\n💸 **Prix :** `25€`,`30€`,`35€`"
            + "\n\n\n__**Offre Perso (Spawn) :**__\n\n🚧 **Spawn :** `sur commande`\n🖋️ **Retouches :** `12`\n⭐ **Spécial :** ` `\n💸 **Prix :** `à définir`"
            + "\n\n\n__**Offre Maxi-Standart (Spawn + Warzone) :**__\n\n🚧 **Spawn :** `100x`,`150x`,`200x`\n🏗️ **Warzone :** `600x`,`800x`,`1000x`\n🖋️ **Retouches :** `3`\n⭐ **Spécial :** `x1 Zone event`\n💸 **Prix :** `70€`,`85€`,`100€`"
            + "\n\n\n__**Offre Maxi-Premium (Spawn + Warzone) :**__\n\n🚧 **Spawn :** `100x`,`150x`,`200x`\n🏗️ **Warzone :** `600x`,`800x`,`1000x`\n🖋️ **Retouches :** `6`\n⭐ **Spécial :** `x2 Zones events`\n💸 **Prix :** `80€`,`95€`,`110€`"
            + "\n\n\n__**Offre Maxi-Perso (Spawn + Warzone) :**__\n\n🚧 **Spawn :** `sur commande`\n🏗️ **Warzone :** `sur commande`\n🖋️ **Retouches :** `12`\n⭐ **Spécial :** ` `\n💸 **Prix :** `à définir`"
            + "\n\n\n **⚠️Votre utilisation de nos services constitue votre acceptation de toutes ces conditions. Veuillez lire attentivement ces conditions.**")
        .setFooter('Copyright 2021-2022 © Nooxico#4244')
        .setColor('2f3136')
    message.channel.send(offreEmbed)

}

module.exports.config = {
    name: 'offre'
};