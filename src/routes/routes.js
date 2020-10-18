const guildsController = require('../controllers/guilds.controller')
const routesController = require('../controllers/routes.controller')

module.exports = async function routes(app, bot) {
	app.get('/', async (req, res) => routesController(req, res));
	app.get('/guilds', async (req, res) => guildsController(req, res, bot));
}
