const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    let HelpEmbed = new Discord.MessageEmbed()
        .setAuthor("Liste des commandes", 'https://probot.media/PZer9oXchw.png')
        .setDescription('**Préfix actuel :** `!`\n\n'
            + '**help** - `Affiche ce message`'
            + '\n**avis** - `Commande uniquement accessible aux clients`'
            + '\n**ping** - `Renvoie la latence du bot`'
            + '\n**user** - `Affiche des informations vous concernant`')
        .setFooter('Copyright 2021-2022 © Nooxico#4244')
        .setColor('2f3136')
    let HelpEmbedAdmin = new Discord.MessageEmbed()
        .setAuthor("Liste des commandes", 'https://probot.media/PZer9oXchw.png')
        .setDescription('**Préfix actuel :** `!`\n\n'
            + '**help** - `Affiche ce message`'
            + '\n**avis** - `Commande uniquement accessible aux clients`'
            + '\n**ping** - `Renvoie la latence du bot`'
            + '\n**user** - `Affiche des informations vous concernant`'
            + '\n**addmember** - `Ajouter le membre mentionné au salon`'
            + '\n**ban** - `Banni le joueur mentionné`'
            + '\n**delete** - `Supprime le salon dans lequel la commande est exécuté`'
            + '\n**clear** - `Supprime un nombre de messages spécifié`'
            + '\n**close** - `Ferme et sauvegarde le ticket`'
            + '\n**conditions** - `Envoie un message avec les conditions`'
            + `\n**create** - \`Créer une embed personnalisé dans le salon création\``
            + '\n**image** - `Créer une embed avec une image de votre choix`'
            + '\n**kick** - `Expulse le joueur spécifié`'
            + '\n**mute** - `Rend muet le joueur spécifié`'
            + '\n**offre** - `Envoie un message avec les différentes offres`'
            + '\n**paypal** - `Enclanche le processus de paiement`'
            + '\n**remove** - `Retire le membre mentionné du salon`'
            + '\n**rules** - `Envoie un message avec les règles du serveur`'
            + '\n**unmute** - `Redonne le droit de parler au joueur spécifié`')
        .setFooter('Copyright 2021-2022 © Nooxico#4244')
        .setColor('2f3136')
    if (message.member.roles.cache.find(x => x.name === '*'))
        return message.author.send(HelpEmbedAdmin);
    if (!message.member.roles.cache.find(x => x.name === '*'))
        return message.author.send(HelpEmbed);


}

module.exports.config = {
    name: 'help'
}