

function checkPassword() {
    const password = document.getElementById('password').value;
    if (password === 'sleep') {
        document.getElementById('login').style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
    } else {
        alert('Contraseña incorrecta');
    }
}
