const MongoClient = require('mongodb').MongoClient;

module.exports = class Posts {
    static async find() {
        const conn = await MongoClient.connect('mongodb://127.0.0.1:27017/exemplo01');
        const db = conn.db();
        return await db.collection('posts').find().toArray();
    }
}