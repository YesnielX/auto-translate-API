const { Client } = require('discord.js')
const client = new Client();

module.exports = class Bot {
    client;
    constructor() {
        this.client = client
    }

    async StartBot() {
        await this.client.login(process.env.BOT_TOKEN);
    }

    getGuildsAndUsers () {
        return {
            servers: this.client.guilds.cache.size,
            users: this.client.users.cache.size
        }
    }
}