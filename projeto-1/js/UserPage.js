window.onload = async () => {
    if (!getSession() || getSession() === "") {
        window.alert('Usuário deslogado');
        window.location = "/"
    }

    let userLabel = document.querySelector("#username-display");
    let username = window.localStorage.getItem('username');
    userLabel.textContent = username;

    let posts = await showPosts();
    renderPosts(posts);
}

const colorSection = document.querySelector('#color-section');
const postSection = document.querySelector('#post');
const lasposSection = document.querySelector('#last-posts');
const userSection = document.querySelector('#user-section');

const colorBtn = document.querySelector('#colorBtn');
const postBtn = document.querySelector('#postBtn');
const logoutBtn = document.querySelector('#logoutBtn');
const createUserBtn = document.querySelector('#createUserBtn');
const showUserBtn = document.querySelector('#showUserBtn');

const createUserForm = document.querySelector('#createUserForm');

colorBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let atts = colorSection.getAttribute('style');
    if (atts.includes('none')) {
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
    if (atts.includes('none')) {
        postSection.removeAttribute('style');
        postSection.setAttribute('style', 'display:inherit');
    } else {
        postSection.removeAttribute('style');
        postSection.setAttribute('style', 'display:none');
    }
});

showUserBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    let atts = userSection.getAttribute('style');
    if (atts.includes('none')) {
        userSection.removeAttribute('style');
        userSection.setAttribute('style', 'display:inherit');
        let users = await listUsers();
        let list = document.querySelector('#list-users');
        users.map(u => {
            list.innerHTML = `${list.getInnerHTML()}
                <div>
                    <h4>${u.username}</h4>
                    <p>${u.acl}</p>
                </div>
            `;
        });

    } else {
        userSection.removeAttribute('style');
        userSection.setAttribute('style', 'display:none');
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

createUserBtn.addEventListener('click', async (event) => {
    event.preventDefault();
    let inputs = createUserForm.elements;
    let email = inputs[0].value;
    let pass = inputs[1].value;
    let acl = inputs[2].checked ? "admin" : "";
    if (email !== "" && pass !== "") {
        const data = {
            username: email, password: pass, acl
        };
        const res = await createUser(data);
        if (res.status === 200) {
            window.alert('Usuário criado com sucesso.');
            window.location.reload();
        }
        if (res.status === 409) {
            window.alert('Um usuário já existe com esse email.');
        }
        else {
            window.alert('Erro ao criar o usuário.');
            window.reload();
        }
        return;
    } else {
        window.alert("Insira um email ou senha para criar o usuário.")
    }
});
