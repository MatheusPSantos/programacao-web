const { compareSync } = require("bcryptjs");
const User = require("../models/User");


class LoginController {
    constructor() {
        this.UserModel = new User();
    }

    async login(request, response) {
        try {
            const { body } = request;
            let user = await this.UserModel.findOne({ username: body.username });
            if (user) {
                compareSync(body.password, user.password) ? response.status(200).json(user) : response.status(401).json({ error: 'Não autorizado' });
            } else {
                return response.status(400).json({ error: 'Usuário não existe' });
            }

        } catch (error) {
            throw new Error(error);
        }
    }

    logout() {
        
    }
}

module.exports = new LoginController();