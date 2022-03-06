module.exports = bot => {
    console.log("Le bot Exta' est en ligne !")

    let guild = bot.guilds.cache.get('833258268208922644')

    let statuses = [
        `By Nooxico | !help`
    ]

    setInterval(function () {
        let status = statuses[Math.floor(Math.random() * statuses.length)];
        bot.user.setActivity(status, { type: "WATCHING" })
    }, 5000)
}