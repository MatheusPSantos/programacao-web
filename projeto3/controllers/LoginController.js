const { compareSync } = require("bcryptjs");
const User = require("../models/User");
const Session = require("../models/Session");


class LoginController {
    constructor() {
        this.UserModel = new User();
        this.SessionModel = new Session();
    }

    async login(request, response) {
			console.log(" request ID >>>", request.sessionID);
			try {
				const { body, sessionID } = request;
				let user = await this.UserModel.findOne({ username: body.username });
				if (user) {
					if(compareSync(body.password, user.password)) {
						let session = await this.SessionModel.createSession({username: body.username, session: sessionID});
						return response.status(200).json({user, sessionID});
					} else {
						return response.status(401).json({ error: 'Não autorizado' });
					}
				} else {
				    return response.status(400).json({ error: 'Usuário não existe' });
				}
					
					return 0;
				} catch (error) {
					throw new Error(error);
				}
			}

    logout() {
        
    }
}

module.exports = new LoginController();