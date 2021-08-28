window.onload = () => {
    if (!getSession() || getSession() === "") {
        window.alert('Usuário deslogado');
        window.location = "/"
    }
}