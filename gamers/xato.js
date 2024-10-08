document.addEventListener("DOMContentLoaded", () => {
    const words = ["planet", "garden", "puzzle", "jungle", "adventure", "coding", "fantasy"];
    let currentWord, scrambledWord, score = 0;

    function shuffle(word) {
        return word.split('').sort(() => 0.5 - Math.random()).join('');
    }

    function setNewWord() {
        currentWord = words[Math.floor(Math.random() * words.length)];
        scrambledWord = shuffle(currentWord);
        document.getElementById("word-display").innerText = scrambledWord;
    }

    function checkAnswer() {
        const guess = document.getElementById("guess-input").value.toLowerCase();
        if (guess === currentWord) {
            score += 10;
            document.getElementById("score").innerText = score;
            alert("Correct! Great job!");
            setNewWord();
            document.getElementById("guess-input").value = "";
        } else {
            alert("Oops, try again!");
        }
    }

    // Loading Screen Logic
    const loadingScreen = document.getElementById("loading-screen");
    const gameContainer = document.getElementById("game-container");
    const startButton = document.getElementById("start-button");

    startButton.addEventListener("click", () => {
        loadingScreen.style.opacity = 0;
        setTimeout(() => {
            loadingScreen.style.display = "none";
            gameContainer.style.display = "block";
        }, 800); // Fade out duration matches CSS transition time
        setNewWord();
    });

    // Attach checkAnswer function to button
    document.getElementById("submit-button").addEventListener("click", checkAnswer);
});