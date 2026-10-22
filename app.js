const game = () => {
    let pScore = 0;
    let cScore = 0;

    // Start the game
    const startGame = () => {
        const playBtn = document.querySelector(".intro button");
        const introScreen = document.querySelector(".intro");
        const match = document.querySelector(".match");

        playBtn.addEventListener("click", () => {
            introScreen.classList.add("fadeOut");
            match.classList.remove("fadeOut");
            match.classList.add("fadeIn");
        });
    };

    // Play the match
    const playMatch = () => {
        const options = document.querySelectorAll(".options button");
        const playerHand = document.querySelector(".player-hand");
        const computerHand = document.querySelector(".computer-hand");
        const hands = document.querySelectorAll(".hands img");
        const computerOptions = ["rock", "paper", "scissors"];

        hands.forEach(hand => {
            hand.addEventListener("animationend", function () {
                this.style.animation = "";
            });
        });

        options.forEach(option => {
            option.addEventListener("click", function () {
                const playerChoice = this.textContent.trim();
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];

                // Start the hand animations
                playerHand.style.animation = "shakePlayer 1s ease";
                computerHand.style.animation = "shakeComputer 1s ease";

                // Show the choices and compare them after the animation
                setTimeout(() => {
                    compareHands(playerChoice, computerChoice);
                    playerHand.src = `./assets/${playerChoice}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
                }, 1000);
            });
        });
    };

    // Update the score
    const updateScore = () => {
        document.querySelector(".player-score p").textContent = pScore;
        document.querySelector(".computer-score p").textContent = cScore;
    };

    // Compare the player's choice with the computer's choice
    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        if (playerChoice === computerChoice) {
            winner.textContent = "It is a tie!";
            return;
        }

        if (
            (playerChoice === "rock" && computerChoice === "scissors") ||
            (playerChoice === "paper" && computerChoice === "rock") ||
            (playerChoice === "scissors" && computerChoice === "paper")
        ) {
            winner.textContent = "Player Wins!";
            pScore++;
        } else {
            winner.textContent = "Computer Wins!";
            cScore++;
        }

        updateScore();
    };

    startGame();
    playMatch();
};

game();
