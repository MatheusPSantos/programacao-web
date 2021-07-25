const loginButton = document.getElementById("btnlogin");
const buttonCloseLogin = document.getElementById("close-login-box");
const loginBox = document.getElementById("login-box");
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("email");
const loginPass = document.getElementById("pass");
const spanAlert = document.getElementById("display-alert");
const alertMessage = "Usuário ou senha inválidos";

const requestConfig = {

    mode: "no-cors"
};

const loginAPI = "https://reqres.in/api/login";

buttonCloseLogin.addEventListener('click', () => {
    loginBox.setAttribute("style", "display:none");
});

loginButton.addEventListener('click', () => {
    loginBox.setAttribute("style", "display:inherit");
});

loginPass.addEventListener('change', (event) => {
    event.preventDefault();
    if (loginPass.classList.toString().includes("invalid-input")) {
        loginPass.classList.remove("invalid-input");
        spanAlert.innerText = "";
    }
});


loginEmail.addEventListener('change', (event) => {
    event.preventDefault();
    if (loginEmail.classList.toString().includes("invalid-input")) {
        loginEmail.classList.remove("invalid-input");
        spanAlert.innerText = "";
    }
});

loginForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let valEmail = loginEmail.value;
    let valPass = loginPass.value;

    if (valEmail.length <= 3 || valPass.length <= 3) {
        spanAlert.innerText = alertMessage;
        loginPass.classList.add("invalid-input");
        loginEmail.classList.add("invalid-input");
        spanAlert.innerText = alertMessage;

        return;
    }

    requestLogin(valEmail, valPass);
});

function requestLogin(user, pass) {
    try {
        console.log(user, pass)
        let token = "";
        let requestBody = {
            email: user.trim(),
            password: pass.trim()
        };

        fetch(loginAPI, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestBody)
        }).then(response => {
            if (response.status === 200) {
                return response.json();
            } else {
                displayRequestError(response.statusText);
            }
        }).then(data => {
            document.cookie = `access_token=${data.token}`;
            closeLoginBox();
        }).catch(err => {
            console.error(err);
        });
    } catch (error) {
        console.error('erro', error);
    }
}

function displayRequestError(errormsg) {
    window.alert(errormsg);
}

function closeLoginBox() {
    loginPass.value = "";
    loginEmail.value = "";
    loginBox.setAttribute("style", "display:none");
}