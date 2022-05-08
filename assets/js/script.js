/**
 * Declare variables
 */
const cards = document.querySelectorAll(".memory-card");
const totalNumberOfCards = cards.length;
const gameLengthInSeconds = 360;
let hasFlippedCard = false;
let cardFlips = 0;
let lockBoard = true;
let firstCard, secondCard;
const btn = document.getElementById("btn");
const overlayElement = document.getElementById("start-overlay");
var audioElement = document.getElementById("myMusic");
var bestScoreElements = document.querySelectorAll(".best-score");
var lastScoreElements = document.querySelectorAll(".last-score");
var gameOverlayElement = document.getElementById("start-game-container");
var flipsElement = document.getElementById("flips");
var timeElement = document.getElementById("time-remaining");
var gameControllerElement = document.getElementById("game-controller");

var timeRemaining = null;
var gameInProgress = false;
var gameTimerInterval = null;
var solvedCardsCount = 0;
let scores = [];

/*code for timer countdown, flips and ovelay start button inpired from:
https://www.youtube.com/watch?v=ZniVgo8U7ek*/
/**
 * Starts the countdown timer
 */
function startGameTimer() {
    gameTimerInterval = setInterval(() => {
        timeRemaining--;
        timeElement.innerText = timeRemaining.toString();
        if (timeRemaining <= 0) {
            finishGame();
        }
    }, 1000);
}

/**
 * Play audio
 */
function playMusic() {
    audioElement.play();
    btn.classList.remove("off");
    btn.classList.add("on");
    btn.value = " ON ";
}

/**
 * Stop audio
 */
function stopMusic() {
    audioElement.pause();
    audioElement.currentTime = 0.0;
    btn.classList.remove("on");
    btn.classList.add("off");
    btn.value = "OFF";
}