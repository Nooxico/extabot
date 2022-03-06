const Discord = require("discord.js");
const config = require("./config.json")
const fs = require('fs');
const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {

    const props = require(`./commands/${file}`);
    console.log(`[Command]: ${file} ✔`)
    bot.commands.set(props.config.name, props)
}

bot.on("message", async message => {

    if (message.author.bot) return;
    if (message.channel.type === "dm") return;
    if (message.content.indexOf(config.prefix) !== 0) return;

    let prefix = config.prefix;
    let messageArray = message.content.split(" ");
    let command = messageArray[0];
    let args = messageArray.slice(1);

    let commandFile = bot.commands.get(command.slice(prefix.length))
    if (commandFile) commandFile.run(bot, message, args)
})

const status = require('./events/status'),
    embeds = require('./events/embeds'),
    suggestions = require('.//events/suggestions'),
    insultes = require('./events/anti-insultes'),
    welcome = require('./events/welcome'),
    ticket = require('./events/ticket'),
    memberCount = require('./events/memberCount'),
    music = require('./events/music')

bot.on("ready", async () => {
    status(bot)
    embeds(bot)
    suggestions(bot)
    insultes(bot)
    welcome(bot)
    ticket(bot)
    memberCount(bot)
    music(bot)
})

bot.login(config.token)