const Discord = require('discord.js')

module.exports.run = async (bot, message, args) => {

    message.delete()

    if (!message.member.roles.cache.find(x => x.name === '*'))
        return;

    let arrow = message.guild.emojis.cache.find(emoji => emoji.name === 'warn')

    let ConditionsEmbed = new Discord.MessageEmbed()
        .setAuthor(`Conditions d\'Utilisation`, "https://cdn.discordapp.com/emojis/817827789318389781.gif?v=1")
        .setTitle("━━━━━━━━━━━━━━━━━━━━━")
        .setThumbnail('https://cdn.discordapp.com/attachments/704594714233536572/839172765734142004/kisspng-contract-management-clip-art-contract-5ac32d29cd36a9.3390947115227405218406.png')
        .setDescription('**Etape 1 | Passer commande :**\n\n'
            + '**1.** __Ouverture de votre dossier__\n\n> ➜ Lors de votre procédure de commande, merci de nous fournir un cahier des charges complet concernant Build. Ainsi que les informations complémentaires le concernant.'
            + '\n\n**2.** __Prise en charge__\n\n> ➜ Le paiement de la commande se déroule en deux parties distinctes, un acompte de **(50%)** doit être versé quand le cahier des charges a été validé par le client et le Builder.'
            + 'Les **50 % restants**  seront payés lorsque le Builder aura affirmé avoir fini le build. Toutefois, si un accord est trouvé mais que nous ne pouvons pas vous livrer à temps, un'
            + 'délais de **10 jours** est accordé au Builder en charge de votre commande. Au-delà de ces 10 jours, **une baisse du prix** de notre part sera effectuée.'
            + '\n\n> ➜ En fonction de votre date limite de livraison du Build, le prix initial de votre commande **peut augmenter** si celle-ci est estimée trop courte par rapport au temps'
            + 'habituel requis de développement *(en moyenne 10 jours)*'
            + '\n\n> ➜ **Aucune négociation** de nos tarifs n\'est envisageable, si vous n\'êtes pas d\'accord avec le prix estimé de votre commande et que vous cherchez à le négocier, alors notre équipe **est en droit** de mettre immédiatement fin à la commande.'
            + '\n\n **3.** __Récéption de la commande__\n\n> ➜ Lorsque vous recevez le résultat de votre commande, vous êtes en droit de réclamer des modifications sur celle-ci. Cependant, au bout d’une seule liste exhaustive'
            + 'de modifications pour le build reçue, les modifications supplémentaires se verront payantes en fonction de leurs caractéristiques.'
            + '\n\n**4.** __Propriété visuelle__\n\n> ➜ Toutes nos créations nous appartiennent. Une fois le paiement de la commande effectué, vous êtes libres de diffuser des images du build sur n’importe quel'
            + 'réseau.Cependant certaines règles de diffusions s’appliquent tout de même, les voici:\n\n> - L’apparition de notre groupe (logo ou texte) doit toujours être visible sur l\'image diffusée.')
        //.setFooter('Copyright 2021-2022 © Nooxico#4244')
        .setColor('2f3136')

    let ConditionsEmbed2 = new Discord.MessageEmbed()
        .setDescription('**5.** __Paiement__\n\n > ➜ Paiement uniquement via ** Paypal ** en ** (Amis et proches) ** afin d\'éviter un litige de la part du client une fois le service effectué.'
            + `\n\n\n:warning:**Votre utilisation de nos services constitue votre acceptation de toutes ces conditions. Veuillez lire attentivement ces conditions.`
            + 'En cas de non - respect des conditions, votre projet et toutes les personnes incluant celui - ci seront blacklist de nos services et votre commande prendra immédiatement fin peu importe son avancée.**')
        .setFooter('Copyright 2021-2022 © Nooxico#4244')
        .setColor('2f3136')

    message.channel.send(ConditionsEmbed)
    message.channel.send(ConditionsEmbed2)

}

module.exports.config = {
    name: 'conditions'
}