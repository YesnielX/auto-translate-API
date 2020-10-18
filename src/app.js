const express = require('express');
const Bot = require('./utils/Bot');
const routes = require('./routes/routes');

const app = express();
const bot = new Bot();

// Middlewards
app.use(express.static(`${__dirname}/public`));
if (process.env.NODE_ENV !== 'production') require('dotenv').config()

// Start Bot and Routes
bot.StartBot();
routes(app, bot);

app.set('PORT', process.env.PORT);

module.exports = app;