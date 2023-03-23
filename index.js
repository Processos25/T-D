document.addEventListener("visibilitychange"),
function() {
    if (document.hidden) {
        document.title = "volta aqui :'(";
    } else {
        document.title = "Bem vindo!";
    }
}

document.addEventListener("visibilitychange"),
function() {
    if (document.visibilityState === "hidden") {
        document.title = "volta aqui :'(";
    } else {
        document.title = "Bem vindo!";
    }
}