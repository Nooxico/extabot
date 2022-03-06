module.exports = bot => {

    bot.on("message", async message => {

        let blacklisted = ['pute', 'salope', 'dox', 'boot', 'dox', 'merde', 'porno', 'nul', 'pd', 'tuer', 'enculer', 'fdp', 'fils de pute', 'negro', 'gay', 'stifleur', 'bâtard', 'bicot', 'conasse', 'couille molle', 'débile', 'ducon', 'dugland', 'enculé', 'fachiste', 'ta gueule', 'salope', 'PD', 'batard', 'putin', 'enfoiré', 'connare', 'connard']
        let foundInText = false;
        for (var i in blacklisted) {
            if (message.content.toLocaleLowerCase().includes(blacklisted[i].toLocaleLowerCase())) foundInText = true;
        }

        if (foundInText) {
            message.delete()
        }
    })
}