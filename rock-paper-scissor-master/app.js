function game () {
  //score  du joueur
  let pScore = 0;
  //score de l'ordi
  let cScore = 0;

  //fonction pour lancer la partie
  function startGame(){
    //selection du bouton play
    const playBtn = document.querySelector(".intro button");
    //selection du bouton page d'intro
    const introScreen = document.querySelector(".intro");
    //selection du bouton page match
    const match = document.querySelector(".match");
    //dans le cas d'un click sur le bouton play on rajoute la classe fadeout à la page d'intro et fadein à la page de match
    //qui va lancer l'animation pour faire apparraitre la page de match et disparaitre la page d'intro
    playBtn.addEventListener("click", () => {
      introScreen.classList.add("fadeOut");
      match.classList.add("fadeIn");
    });
  };
  //La Partie match
  function playMatch(){
    //selection des boutons de choix (pierre,feuille et ciseaux)
    const options = document.querySelectorAll(".options button");
    //selection de l'image du choix du joueur
    const playerHand = document.querySelector(".player-hand");
    //selection de l'image du choix du ordi
    const computerHand = document.querySelector(".computer-hand");

    //choix ordinateur list
    const computerOptions = ["rock", "paper", "scissors"];

    //on met un listener dans le cas d'un click pour chaque bouton de choix
    options.forEach(option => {
      option.addEventListener("click", function() {
        //math random qui permet le choix de l'ordi
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
      winner.textContent = "It is a tie";
      return;
    }
    //Check for Rock
    if (playerChoice === "rock") {
      if (computerChoice === "scissors") {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      }
    }
    //Check for Paper
    if (playerChoice === "paper") {
      if (computerChoice === "scissors") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
      }
    }
    //Check for Scissors
    if (playerChoice === "scissors") {
      if (computerChoice === "rock") {
        winner.textContent = "Computer Wins";
        cScore++;
        updateScore();
        return;
      } else {
        winner.textContent = "Player Wins";
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
