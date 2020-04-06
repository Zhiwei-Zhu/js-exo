function game () {
  //score  du joueur
  let pScore = 0;
  //score de l'ordi
  let cScore = 0;

  //fonction pour lancer la partie
  function startGame(){
    //selection du bouton play
    const playBtn = document.querySelector(".intro button");
    const introScreen = document.querySelector(".intro");
    const match = document.querySelector(".match");

    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //Play Match
  function playMatch() {
    const options = document.querySelectorAll(".options button");
    const playerHand = document.querySelector(".player-hand");
    const computerHand = document.querySelector(".computer-hand");
    const hands = document.querySelectorAll(".hands img");

    hands.forEach(hand => {
      hand.addEventListener("animationend", function() {
        this.style.animation = "";
      });
    });
    //Computer Options
    const computerOptions = ["rock", "paper", "scissors"];

    options.forEach(option => {
      option.addEventListener("click", function() {
        //Computer Choice
        const computerNumber = Math.floor(Math.random() * 3);
        const computerChoice = computerOptions[computerNumber];

          //utilisation de la fonction comparer
          compareHands(this.className, computerChoice);
          //change l'img en fonction du choix du joueur ou de l'ordi
          playerHand.src = `./assets/${this.className}.png`;
          computerHand.src = `./assets/${computerChoice}.png`;
      });
    });
  };

  function updateScore(){
    const playerScore = document.querySelector(".player-score p");
    const computerScore = document.querySelector(".computer-score p");
    playerScore.textContent = pScore;
    computerScore.textContent = cScore;
  };
  //fonction permettant de comparer les choix du joueur et de choix
  function compareHands(playerChoice, computerChoice){
    //Update Text
    const winner = document.querySelector(".winner");
    //Checking for a tie
    if (playerChoice === computerChoice){
      winner.textContent = "Egalité";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Joueur gagne";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Ordinateur gagne";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Ordinateur gagne";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Joueur gagne";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Ordinateur gagne";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Joueur gagne";
        pScore++;
        updateScore();
        return;
      }
    }
  };

  //lancer les fonction
  startGame();
  playMatch();
};

//lancer la fonction principale
game();
