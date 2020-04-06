// Ici nous avons les elements du DOM
const time = document.getElementById('time'),
  greeting = document.getElementById('greeting'),
  name = document.getElementById('name'),
  focus = document.getElementById('focus');


// Cette fonction nous sert à récupérer et afficher l'heure (heures, minutes et secondes)
function showTime() {
  let today = new Date(),
    hour = today.getHours(),
    min = today.getMinutes(),
    sec = today.getSeconds();

  // Ici nous mettons en place la structure d'affichage de l'heure
  time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(
    sec
  )} `;

  setTimeout(showTime, 1000);
}

// Cette fonction permet d'ajouter un 0 devant les minutes et les secondes lorsqu'elles sont inférieures à 10 (12:00:09 et non pas 12:0:9)
function addZero(n) {
  return (parseInt(n, 10) < 10 ? '0' : '') + n;
}

// Cette fonction nous permet de mettre en place le background ainsi que le message de bienvenue selon l'heure de la journée (ex: message = bonsoir et bg nuit etoilée si heure est entre 18:00 et 23:59)
function setBgGreet() {
  let today = new Date(),
    hour = today.getHours();

  if (hour < 12) {
    // Matin
    document.body.style.backgroundImage = "url('https://i.ibb.co/7vDLJFb/morning.jpg')";
    greeting.textContent = 'Bonjour, ';
  } else if (hour < 18) {
    // Après-midi
    document.body.style.backgroundImage = "url('https://i.ibb.co/3mThcXc/afternoon.jpg')";
    greeting.textContent = 'Bonjour, ';
  } else {
    // Soirée
    document.body.style.backgroundImage = "url('https://i.ibb.co/924T2Wv/night.jpg')";
    greeting.textContent = 'Bonsoir, ';
    document.body.style.color = 'white';
  }
}

// Cette fonction permet de créer une zone de texte afin d'afficher votre nom 
function getName() {
  if (localStorage.getItem('name') === null) {
    name.textContent = '[Entrez votre nom]';
  } else {
    name.textContent = localStorage.getItem('name');
  }
}

// Cette fonction permet d'enregistrer le nom entré 
function setName(e) {
  if (e.type === 'keypress') {
    // Cela nous permet de verifier si la zone de texte est selectionnée
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('name', e.target.innerText);
      name.blur();
    }
  } else {
    localStorage.setItem('name', e.target.innerText);
  }
}

// Cette fonction permet de créer une zone de texte afin d'afficher votre objectif 
function getFocus() {
  if (localStorage.getItem('focus') === null) {
    focus.textContent = '[Entrez un objectif]';
  } else {
    focus.textContent = localStorage.getItem('focus');
  }
}

// Cette fonction permet d'enregistrer l'objectif entré 
function setFocus(e) {
  if (e.type === 'keypress') {
    // Cela nous permet de verifier si la zone de texte est selectionnée
    if (e.which == 13 || e.keyCode == 13) {
      localStorage.setItem('focus', e.target.innerText);
      focus.blur();
    }
  } else {
    localStorage.setItem('focus', e.target.innerText);
  }
}

name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);
focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

// Run
showTime();
setBgGreet();
getName();
getFocus();
