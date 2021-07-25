let loginButton = document.getElementById("btnlogin");
let buttonCloseLogin = document.getElementById("close-login-box");
let loginBox = document.getElementById("login-box");


buttonCloseLogin.addEventListener('click', () => {
    loginBox.setAttribute("style", "display:none");
});

loginButton.addEventListener('click', () => {
    loginBox.setAttribute("style", "display:inherent");
})