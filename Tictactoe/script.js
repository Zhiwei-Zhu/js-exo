var origBoard; //un tableau qui garde une trace de ce qui se trouve dans chaque carré : X, O ou rien

const huPlayer = 'O'; // humain
const aiPlayer = 'X'; // ordi
const winCombos = [ //un tableau qui va montrer les combinaisons gagnantes
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

const cells = document.querySelectorAll('.cell'); //La variable cells va stocker la référence de chaque élément qui a une classe "cell".
startGame(); // appel de la fonction pour démarrer le jeu


//Fonction pour lancer le jeu
function startGame() {
    document.querySelector(".endgame").style.display = "none";
    origBoard = Array.from(Array(9).keys()); // faire en sorte que le tableau contienne tous les nombres de 0 à 9
    for (var i = 0; i < cells.length; i++) {
        cells[i].innerText = ''; // Il n'y aura rien dans la cellule
        cells[i].style.removeProperty('background-color'); // la suppression du background
        cells[i].addEventListener('click', turnClick, false); // appele de la fonction turnClick
    }
}
// définis la fonction turnClick
function turnClick(square) {
    if (typeof origBoard[square.target.id] == 'number') { //si l'identifiant qui vient d'être cliqué est un nombre, cela signifie que personne n'a joué à cet endroit
        turn(square.target.id, huPlayer) // tour de l'humain
        if (!checkWin(origBoard, huPlayer) && !checkTie()) turn(bestSpot(), aiPlayer); // vérifier s'il y a égalité/victoire, sinon, le joueur Ai jouera son tour
    }
}


// définis la fonction turn
function turn(squareId, player) {
    origBoard[squareId] = player;
    document.getElementById(squareId).innerText = player; // mise à jour de l'affichage pour que nous puissions voir où le joueur a cliqué
    let gameWon = checkWin(origBoard, player)
    if (gameWon) gameOver(gameWon)  // chaque fois que le tour a été fait, nous allons vérifier si la partie a été gagnée
}

// définis la fonction checkWin
function checkWin(board, player) {
    let plays = board.reduce((a, e, i) =>
        (e === player) ? a.concat(i) : a, []); //trouver chaque index que le joueur a joué
    let gameWon = null;
    for (let [index, win] of winCombos.entries()) { // vérifier si le jeu a été gagné en passant en boucle tous les winCombos
        if (win.every(elem => plays.indexOf(elem) > -1)) { // fait jouer le joueur à chaque endroit qui compte comme une victoire pour cette victoire
            gameWon = {index: index, player: player}; // quel combot le joueur a gagné et quel joueur a gagné
            break;
        }
    }
    return gameWon;
}
// définis la fonction gameOver
function gameOver(gameWon) {
    for (let index of winCombos[gameWon.index]) { // parcour tous les index des WinCombos
        document.getElementById(index).style.backgroundColor =
            gameWon.player == huPlayer ? "blue" : "red"; // Si l'humain gagne -> bleu, si l'ordi gagne -> rouge
    }
    for (var i = 0; i < cells.length; i++) {  //s'assurer que nous ne pouvons plus cliquer sur les cellules
        cells[i].removeEventListener('click', turnClick, false);
    }
    declareWinner(gameWon.player == huPlayer ? "Tu Gagne!" : "Tu Perds."); // Si l'humain gagne afficher "tu gagne", si il perd " tu perds"
}
// définis la fonction declareWinner
function declareWinner(who) {
    document.querySelector(".endgame").style.display = "block";
    document.querySelector(".endgame .text").innerText = who;
}

// définis la fonction emptySquares
function emptySquares() {
    return origBoard.filter(s => typeof s == 'number'); // filtrer chaque élément de l'origBoard pour voir si le type d'élément est égal au nombre. Si oui, nous allons le renvoyer (tous les carrés qui sont des nombres sont vides, les carrés avec X et O ne sont pas vides)
}

// définis la fonction bestSpot
function bestSpot() {
    return minimax(origBoard, aiPlayer).index; // jouera toujours dans la première case vide
}

// définis la fonction checkTie
function checkTie() {
    if (emptySquares().length == 0) { //si chaque case est remplie et personne n'a gagné, c'est l'égalité
        for (var i = 0; i < cells.length; i++) {
            cells[i].style.backgroundColor = "green"; // mettre le background en vert
            cells[i].removeEventListener('click', turnClick, false); // s'assurer que l'utilisateur ne peut cliquer nulle part lorsque le jeu est terminé
        }
        declareWinner("Match Nul!")
        return true; // retourne true en cas d'égalité
    }
    return false;
}

// définis la fonction minimax
function minimax(newBoard, player) {
    var availSpots = emptySquares(); // définis les index des places disponibles dans le tableau

    if (checkWin(newBoard, huPlayer)) { // vérifier qui gagne
        return {score: -10}; // si O, retourner -10
    } else if (checkWin(newBoard, aiPlayer)) {
        return {score: 10}; // si X, retourner 10
    } else if (availSpots.length === 0) {
        return {score: 0}; // égalité on retourne 0
    }
    var moves = []; // recueillir les scores de chacun des emplacements vides pour les évaluer ultérieurement
    for (var i = 0; i < availSpots.length; i++) {
        var move = {};
        move.index = newBoard[availSpots[i]]; // en fixant le numéro d'index de l'emplacement vide, qui a été enregistré comme un numéro dans l'origBoard, à la propriété d'index de l'objet déplacé
        newBoard[availSpots[i]] = player; // en attribuant une place vide dans newBoard au joueur actuel

        if (player == aiPlayer) { // appeler la fonction minimax avec l'autre joueur dans le newBoard nouvellement modifié
            var result = minimax(newBoard, huPlayer);
            move.score = result.score; // stocker le résultat de l'appel de la fonction minimax, qui comprend une propriété de score, dans la propriété de score de l'objet à déplacer
        } else {
            var result = minimax(newBoard, aiPlayer);
            move.score = result.score; // si la fonction minimax ne trouve pas d'état terminal, elle passe niveau par niveau (plus profondément dans le jeu). cette récursion se produit jusqu'à ce qu'elle atteigne l'état terminal et renvoie un score un niveau plus haut
        }

        newBoard[availSpots[i]] = move.index; // minimax réinitialise newBoard

        moves.push(move); // pousse l'objet en mouvement vers le tableau
    }

    var bestMove; // L'algorithme minimax évalue le meilleur mouvement dans le tableau des mouvements
    if(player === aiPlayer) { // choisir le score le plus élevé lorsque l'IA est en train de jouer et le score le plus bas lorsque l'humain est en train de jouer
        var bestScore = -10000; // si le joueur est le joueur AI , il fixe la variable bestScore e à un nombre très faible
        for(var i = 0; i < moves.length; i++) { // en boucle dans le tableau
            if (moves[i].score > bestScore) { // si un coup a un score plus élevé que bestScore, l'algorithme stocke ce coup
                bestScore = moves[i].score;
                bestMove = i; // s'il y a des coups avec des scores similaires, seul le premier sera stocké
            }
        }
    } else { // Quand le joueur humain
        var bestScore = 10000;
        for(var i = 0; i < moves.length; i++) {
            if (moves[i].score < bestScore) { // minimax cherche un coup avec le score le plus bas à stocker
                bestScore = moves[i].score;
                bestMove = i;
            }
        }
    }

    return moves[bestMove]; // retourne un objet stocké dans bestMove
}