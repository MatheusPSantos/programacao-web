const loginButton = document.getElementById("btnlogin");
const buttonCloseLogin = document.getElementById("close-login-box");
const loginBox = document.getElementById("login-box");
const loginForm = document.getElementById("login-form");
const loginEmail = document.getElementById("email");
const loginPass = document.getElementById("pass");
const spanAlert = document.getElementById("display-alert");
const alertMessage = "Usuário ou senha inválidos";
const colorSection = document.getElementById("color-section");
const submitButtonColor = document.querySelector("#submit-name-color");
const inputNameColor = document.querySelector("#input-name-color");
const inputNameError = document.querySelector("#input-name-error");
const resultsPallete = document.querySelector("#results");
let resPallete = [];


const colourAPI = "https://colourlovers.com/api/palettes/new?format=json";
const loginAPI = "https://reqres.in/api/login";

document.cookie = 'access_token=';
window.onload = displayColorDisplay();

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
            displayColorDisplay();
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

function recoverToken() {
    let cookies = document.cookie.split(';');
    let token = cookies.filter((t) => t.includes("access_token"));
    return token[0].split("=")[1];
}

function displayColorDisplay() {
    let acces_token = recoverToken()
    if (acces_token !== "") {
        colorSection.setAttribute("style", "display:inherit");
        window.scrollTo(0, 6700)

    } else {
        colorSection.setAttribute("style", "display:none");
    }
}

function transformNameInAsciiCode(nameArray) {
    let nameSplited = nameArray.split("");
    return nameSplited.map(ch => {
        return ch.charCodeAt();
    });
}

function calculateRangeValues(listCodes) {
    let { first, second } = separeteList(listCodes);
    let minVal = first.reduce((accumulator, current) => accumulator + current);
    let maxVal = second.reduce((accumulator, current) => accumulator + current);

    minVal = ((359 * (maxVal - minVal) / (359 + minVal)));
    maxVal = ((359 * (maxVal - minVal) / (359 + maxVal)));

    return { min: Math.ceil(minVal), max: Math.ceil(maxVal) };
}

function separeteList(listCodes) {
    listCodes = listCodes.sort((a, b) => a - b);
    let middle = Math.floor(listCodes.length / 2);
    let firstSubList = listCodes.slice(0, middle);
    let secondSubList = listCodes.slice(middle, listCodes.length);

    return { first: firstSubList, second: secondSubList };
}

submitButtonColor.addEventListener('click', (event) => {
    event.preventDefault();
    if (inputNameColor.value.length > 3) {
        let rangeValues = calculateRangeValues(transformNameInAsciiCode(inputNameColor.value));

        requestColoursPallete(rangeValues).then(pallete => {
            template(pallete);
        });
    } else {
        inputNameError.innerText = "Informe mais de três caracteres"
    }
});

inputNameColor.addEventListener('change', (event) => {
    event.preventDefault();
    if (inputNameColor.value.length > 3) {
        inputNameError.innerText = "";
    }
});

function requestColoursPallete(values) {
    let { min, max } = values;
    let url = `${colourAPI}&hueRange=${min},${max}&jsonCallback=_callback`;
    return $.ajax({
        url: url,
        crossDomain: true,
        dataType: "jsonp",
        jsonpCallback: '_callback',
        complete: function (xhr, status) {
            console.log('complete')
        },
        success: function (data, status, xhr) {
            if (data.length != undefined && data.length > 0) {
                if (data[0].colors != undefined) {
                    resPallete = data;
                }
            }
        },
        error: function (xhr, status, error) {
            alert('There was a problem getting a color palette.');
        }
    });
}

function template(values) {
    let tem = values.map((val) => {
        return `
            <span class="pallete-title">${val.title}</span>     
            <div class="pallete-result">
                ${val.colors.map(v => {
            return `<div class="pallete-square" style="background:#${v};">
                    </div>`
        }).join("")}
            </div>
        `;
    });

    resultsPallete.innerHTML = tem.join("");
}

