let intervalId = null; // Variable para almacenar el temporizador

window.onload = function () {
    generateCard();

    document.getElementById("generator-button").onclick = function () {
        generateCard();
    };

    document.getElementById("start-timer").onclick = startTimer;
    document.getElementById("stop-timer").onclick = stopTimer;
}

// Función para generar cartas aleatorias
function generateCard() {
    let figures = ["♥", "♦", "♣", "♠"];
    let numbers = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "A", "J", "Q", "K"];

    let figure = figures[Math.floor(Math.random() * figures.length)];
    let number = numbers[Math.floor(Math.random() * numbers.length)];

    document.querySelector("#palosuperior").innerHTML = figure;
    document.querySelector("#valordelacarta").innerHTML = number;
    document.querySelector("#paloinferior").innerHTML = figure;

    document.querySelector(".carta").style.color = (figure === "♥" || figure === "♦") ? "red" : "black";

}

function startTimer() {
    if (!intervalId) {
        generateCard();
        intervalId = setInterval(generateCard, 10000);
    }
}

function stopTimer() {
    clearInterval(intervalId);
    intervalId = null;
}