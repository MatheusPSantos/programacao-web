function requestLogin(user, pass) {
    try {
        let requestBody = {
            username: user.trim(),
            password: pass.trim()
        };

        return fetch(`${API_URL}/login`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                return response.json();
            }
        }).then(data => {
            return data;
        }).catch(err => {
            console.error("deu esse erro >>> ", err);
        });
    } catch (error) {
        console.error('erro', error);
    }
}
