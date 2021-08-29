window.onload = () => {
    if (!getSession() || getSession() === "") {
        window.alert('Usuário deslogado');
        window.location = "/"
    }

    let userLabel = document.querySelector("#username-display");
    let username = window.localStorage.getItem('username');
    userLabel.textContent = username;
}

const colorSection = document.querySelector('#color-section');
const postSection = document.querySelector('#post');
const lasposSection = document.querySelector('#last-posts');

const colorBtn = document.querySelector('#colorBtn');
const postBtn = document.querySelector('#postBtn');
const logoutBtn = document.querySelector('#logoutBtn');

colorBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let atts = colorSection.getAttribute('style');
    if(atts.includes('none')) {
        colorSection.removeAttribute('style');
        colorSection.setAttribute('style', 'display:inherit');
    } else {
        colorSection.removeAttribute('style');
        colorSection.setAttribute('style', 'display:none');
    }
});

postBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let atts = postSection.getAttribute('style');
    if(atts.includes('none')) {
        postSection.removeAttribute('style');
        postSection.setAttribute('style', 'display:inherit');
    } else {
        postSection.removeAttribute('style');
        postSection.setAttribute('style', 'display:none');
    }
});

logoutBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.cookie = 'session=; Max-Age=-99999999;';
    document.cookie = 'username=; Max-Age=-99999999;';
    document.cookie = 'user_acl=; Max-Age=-99999999;';
    window.location.reload();
});

function getUserACL() {
    return document.cookie.split(';').filter(c => c.includes('user_acl'))[0].split('=')[1];
}