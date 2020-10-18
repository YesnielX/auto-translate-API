const app = require('./app')

async function main() {
	app.listen(app.get('PORT'));
	console.log(`Listening in ${app.get('PORT')}`);
}

main();