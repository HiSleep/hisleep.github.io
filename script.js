function checkPassword() {
    var password = document.getElementById("password").value;
    if(password === "sleep") {
        document.getElementById("login").style.display = "none";
        document.getElementById("main-content").style.display = "block";
        startClock();
    } else {
        alert("Contraseña incorrecta. Inténtalo de nuevo.");
    }
}

function startClock() {
    setInterval(function() {
        var hours = Math.floor(Math.random() * 24);
        var minutes = Math.floor(Math.random() * 60);
        var seconds = Math.floor(Math.random() * 60);
        document.getElementById("clock").innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    }, 1000);
}

function pad(number) {
    return number < 10 ? '0' + number : number;
}
