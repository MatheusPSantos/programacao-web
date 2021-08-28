const database = require('../database/index');

class Color{
	constructor() {
		this.collection = 'color';
	}

	async connect() {
		const db = await database.connectMongo();
		return db.collection(this.collection);
	}

	// sort no array pra pegar o minRange e o maxRange
	// mais um sort dentro do array do range
}