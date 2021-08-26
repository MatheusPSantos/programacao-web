const database = require('../database/index');
const User = require('../models/User');
class UserController {
    constructor() {
        this.collectionName = 'users';
        this.UserModel = new User();
    }

    async index() {
        console.log('index')
    }

    async create(request, response) {
        try {
            const { body } = request;
            let user = await this.UserModel.findOne({username: body.username});
            if (!user) {
                user = await this.UserModel.insertOne(body);
                return response.json(user);
                console.log('criar usuario')
            } else {
                return response.status(409).json({
                    error: 'Já existe um usuário com esse username.'
                });
            }
        } catch (error) {
            new Error(error);
        }
    }

}

module.exports = new UserController();