module.exports = bot => {
    const config = require("../config.json")
    const Discord = require('discord.js')
    const DisTube = require('distube')

    // Create a new DisTube
    const distube = new DisTube(bot, { searchSongs: true, emitNewSongOnly: true });

    bot.on("message", async (message) => {
        if (message.author.bot) return;
        if (!message.content.startsWith(config.prefix)) return;
        const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
        const command = args.shift();

        if (command == "play")
            distube.play(message, args.join(" "));

        if (["repeat", "loop"].includes(command))
            distube.setRepeatMode(message, parseInt(args[0]));

        if (command == "stop") {
            distube.stop(message);
            message.channel.send("Musique stoppée !");
        }

        if (command == "pause") {
            distube.pause(message);
            message.channel.send("Musique mise en pause !")
        }

        if (command == "resume") {
            distube.resume(message);
            message.channel.send("Musique en cours")
        }

        if (command == "skip")
            distube.skip(message);

        if (command == "queue") {
            let queue = distube.getQueue(message);
            message.channel.send('Liste actuelle:\n' + queue.songs.map((song, id) =>
                `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
            ).slice(0, 10).join("\n"));
        }

    });

    // Queue status template
    const status = (queue) => `Volume: \`${queue.volume}%\` | Boucle: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Tout" : "Cette musique" : "Off"}\` | Lire automatiquement: \`${queue.autoplay ? "On" : "Off"}\``;

    // DisTube event listeners, more in the documentation page
    distube
        .on("playSong", (message, queue, song) => message.channel.send(
            `En train de jouer \`${song.name}\` - \`${song.formattedDuration}\`\nDemandé par: ${song.user}\n${status(queue)}`
        ))
        .on("addSong", (message, queue, song) => message.channel.send(
            `La musique ${song.name} à été ajouté - \`${song.formattedDuration}\` à la liste par ${song.user}`
        ))
        .on("playList", (message, queue, playlist, song) => message.channel.send(
            `Jouer la playlist \`${playlist.name}\` de musiques (${playlist.songs.length}).\nDemandé par ${song.user}\nJoue actuellement \`${song.name}\` - \`${song.formattedDuration}\`\n${status(queue)}`
        ))
        .on("addList", (message, queue, playlist) => message.channel.send(
            `La playlist \`${playlist.name}\` à été ajouté (${playlist.songs.length}) à la liste\n${status(queue)}`
        ))
        // DisTubeOptions.searchSongs = true
        .on("searchResult", (message, result) => {
            let i = 0;
            message.channel.send(`**Choisissez une option ci-dessous**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*Entrez autre chose ou attendez 60 secondes pour annuler*`);
        })
        // DisTubeOptions.searchSongs = true
        .on("searchCancel", (message) => message.channel.send(`Recherche annulée`))
        .on("error", (message, e) => {
            console.error(e)
            message.channel.send("Une erreur rencontrée: " + e);
        });
}