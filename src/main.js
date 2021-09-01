/** @format */

const Client = require("./Structures/Client.js");

const config = require("./Data/config.json");
const { Collection } = require("discord.js");

const client = new Client();
client.commands = new Collection

client.start(config.token);


