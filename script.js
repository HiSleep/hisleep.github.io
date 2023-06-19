function checkPassword() {
    var password = document.getElementById("password").value;
    if(password == "sleep") {
        document.getElementById("login").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        startClock();
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

function startClock() {
    setInterval(() => {
        let hours = Math.floor(Math.random() * 24);
        let minutes = Math.floor(Math.random() * 60);
        let seconds = Math.floor(Math.random() * 60);
        document.getElementById("clock").innerText = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }, 1000);
}

function pad(number) {
    return number.toString().padStart(2, '0');
}
