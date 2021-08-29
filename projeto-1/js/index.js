const loginButton = document.getElementById("btnlogin");
const buttonCloseLogin = document.getElementById("close-login-box");
const loginBox = document.getElementById("login-box");
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("email");
const loginPass = document.getElementById("pass");
const spanAlert = document.getElementById("display-alert");
const alertMessage = "Usuário ou senha inválidos";
const colorSection = document.getElementById("color-section");

const colourAPI = "https://colourlovers.com/api/palettes/new?format=json";
const loginAPI = "https://reqres.in/api/login";

window.onload = () => {
    if (getSession() && getSession() !== "") {
        window.location = "user.html";
    }
}

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

loginForm.addEventListener('submit', async (event) => {
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

    const login = await requestLogin(valEmail, valPass);
    if (!login.error) {
        saveSession(login);
        saveUserNameLocalstorage(login);
        closeLoginBox();
        changePage();
        return;
    }
    displayRequestError(login.error);
    return;
});

function saveUserNameLocalstorage(data) {
    const{user} = data;
    window.localStorage.setItem('username', user.username);
}

function displayRequestError(errormsg) {
    window.alert(errormsg);
}

function closeLoginBox() {
    loginPass.value = "";
    loginEmail.value = "";
    loginBox.setAttribute("style", "display:none");
}

function changePage() {
    let sessionTk = getSession();
    if (sessionTk || sessionTk !== "") {
        window.location = "user.html"
        return;
    }
    return;
}