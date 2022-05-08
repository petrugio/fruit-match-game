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
//by default, showing the initial game overlay
showHideGameOverlay(true);

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
/*code for card flip adapted from:
https://www.youtube.com/watch?v=ZniVgo8U7ek*/
/**
 * Flips the card
 */
function flipCard() {
    if (lockBoard) return;
    if (this.classList.contains("disabled")) return;

    if (this === firstCard) return;

    this.classList.add("flip");

    updateFlipsCount();
    if (!hasFlippedCard) {
        hasFlippedCard = true;
        firstCard = this;

        return;
    }

    secondCard = this;
    checkForMatch();
}
/**
 * Updates the number of flips after every card flip
 */
function updateFlipsCount() {
    cardFlips++;
    flipsElement.innerText = cardFlips.toString();
}
/**
 * Checks for a card match and disable matched cards.
 * If all cards are matched - it's game over!
 */
function checkForMatch() {
    if (firstCard.dataset.framework === secondCard.dataset.framework) {
        disableCards();
        solvedCardsCount += 2;
        if (solvedCardsCount >= totalNumberOfCards) {
            finishGame();
        }
    } else {
        unFlipCards();
    }
}
/**
 * Disable cards when matched
 */
function disableCards() {
    firstCard.classList.add("disabled");
    secondCard.classList.add("disabled");

    resetBoard();
}
/**
 * Un-flips the selected pair of cards
 */
function unFlipCards() {
    lockBoard = true;

    setTimeout(() => {
        firstCard.classList.remove("flip");
        secondCard.classList.remove("flip");

        resetBoard();
    }, 1500);
}
/**
 * Un-flips all cards when game is finished
 */
function unFlipAllCards() {
    cards.forEach((card) => {
        card.classList.remove("flip");
    });
}
/**
 * Calculates current game score
 */
function calculateFinishedGameScore() {
    let score = 0;

    //for each card solved - 2 pts
    score += solvedCardsCount * 2;

    const allCardsSolved = solvedCardsCount === totalNumberOfCards;

    if (allCardsSolved) {
        //if all cards solved - +50 pts
        score += 50;

        //for each extra second remaining(only if all cards solved) - 5 pts
        score += timeRemaining * 5;
    }
    return score;
}
/**
 * Calculates game score and updates game history
 */
function updateGameScoreStats() {
    gameOverlayElement.visible = true;
    const lastScore = calculateFinishedGameScore();
    lastScoreElements.forEach((scoreElement) => {
        scoreElement.innerText = lastScore;
    });

    updateScoresHistory();
    const bestScore = calculateBestScore();
    bestScoreElements.forEach((scoreElement) => {
        scoreElement.innerText = bestScore;
    });
}
/**
 * Updates game score history
 */
function updateScoresHistory() {
    scores.push(calculateFinishedGameScore());
}
/**
 * Calculates best game score
 */
function calculateBestScore() {
    const [bestScore] = scores
        .sort(function(a, b) {
            if (a > b) return 1;
            if (a < b) return -1;
            return 0;
        })
        .reverse();
    return bestScore;
}
/**
 * Starts the game
 */
function startGame() {
    timeRemaining = gameLengthInSeconds;
    shuffle();
    lockBoard = false;
    startGameTimer();
    gameInProgress = true;
    showHideGameOverlay(false);
}
/**
 * Ends the game
 */
function finishGame() {
    clearInterval(gameTimerInterval);
    gameInProgress = false;
    updateGameScoreStats();
    showHideGameOverlay(true);
    resetBoard();
    solvedCardsCount = 0;
    lockBoard = true;
    resetTime();
    resetFlips();
    unFlipAllCards();
    resetDisabledCards();
    stopMusic();
    gameControllerElement.innerText = "Start Game";
}
/**
 * Resets board function
 */
function resetBoard() {
    [hasFlippedCard, lockBoard] = [false, false];
    [firstCard, secondCard] = [null, null];
}
/**
 * Resets game time
 */
function resetTime() {
    timeRemaining = gameLengthInSeconds;
    timeElement.innerText = timeRemaining;
}
/**
 * Resets number of flips
 */
function resetFlips() {
    cardFlips = 0;
    flipsElement.innerText = cardFlips;
}
/**
 * Shuffles the cards
 */
function shuffle() {
    cards.forEach((card) => {
        card.style.order = Math.floor(Math.random() * 36).toString();
    });
}
/**
 * Resets disabled cards
 */
function resetDisabledCards() {
    const disabledCards = document.querySelectorAll(".disabled");
    disabledCards.forEach((card) => card.classList.remove("disabled"));
}
//card click listener
cards.forEach((card) => card.addEventListener("click", flipCard));
/**
 * Show or hides game overlay, depending on the parameter
 */
function showHideGameOverlay(show) {
    if (show) {
        overlayElement.classList.remove("hide-overlay");
        overlayElement.classList.add("show-overlay");
        const statsContainer = document.getElementById("game-stats-container");
        if (scores.length > 0) {
            document.getElementById("instructions").style.display = "none";
            statsContainer.style.display = "";
        } else {
            statsContainer.style.display = "none";
        }
    } else {
        overlayElement.classList.remove("show-overlay");
        overlayElement.classList.add("hide-overlay");
    }
}
/**
 * Listens for a click to start the game
 */
gameControllerElement.addEventListener("click", function onClick(event) {
    if (!gameInProgress) {
        startGame();
    }
});
/**
 * Listens for a click to toggle music on and off
 */
btn.addEventListener("click", function onClick(event) {
    if (btn.value === "OFF") {
        playMusic();
    } else {
        stopMusic();
    }
});