// ALLE VARIABELLEN AANGEMAAKT:

// ARRAY VOOR DE AFBEELDINGEN
var autoKleur = ["images/rood.png", "images/groen.png", "images/blauw.png", "images/wit.png", "images/zwart.png"];
var paintJob = ["images/leeg.png", "images/vlam.png", "images/getal.png"];
var autoSpoiler = ["images/spoiler0.png", "images/spoiler.png"];
var autoRaam = ["images/normaal.png", "images/licht.png", "images/donker.png"];
var autoVelg = ["images/velg1.png", "images/velg2.png", "images/velg3.png", "images/velg4.png", "images/velg5.png"];
var autoLicht = ["images/geel.png", "images/xenon.png", "images/led.png"];

// BUTTONS SELECTEREN UIT DE DOM
var buttonKleur = document.querySelectorAll(".coloring button");
var buttonPaintjob = document.querySelectorAll(".paintjob button");
var buttonSpoiler = document.querySelectorAll(".spoiler button");
var buttonRaam = document.querySelectorAll(".raam button");
var buttonRimp = document.querySelectorAll(".rimp button");
var buttonLicht = document.querySelectorAll(".licht button");

var buttonRandom = document.querySelector(".random");

// VARIABELLEN VOOR HET GELUID BESTAND
var audio = document.querySelector("audio");

// FUNCTIES BESCHREVEN:

// FUNCTIE VOOR HET AFSPELEN VAN HET GELUID
function playSound() {
  audio.play()
};

//FUNCTIE VOOR HET VERVANGEN VAN AFBEELDINGEN MET EEN PARAMETER
function wijzig(target) {
  //ALS DE PARAMETER GELIJK IS AAN HET ID ROOD WORD DE AFBEELDING VERVANGEN

  // AUTO KLEUR WIJZIGEN
  if (event.target.id === "rood") {
    document.querySelector("img#auto").src = autoKleur[0];
  } else if (event.target.id === "groen") {
    document.querySelector("img#auto").src = autoKleur[1];
  } else if (event.target.id === "blauw") {
    document.querySelector("img#auto").src = autoKleur[2];
  } else if (event.target.id === "wit") {
    document.querySelector("img#auto").src = autoKleur[3];
  } else if (event.target.id === "zwart") {
    document.querySelector("img#auto").src = autoKleur[4];
  }
  //PAINTJOBS WIJZIGEN
  else if (event.target.id === "normaal") {
    document.querySelector("img#paintjob").src = paintJob[0];
  } else if (event.target.id === "vuur") {
    document.querySelector("img#paintjob").src = paintJob[1];
  } else if (event.target.id === "nummer") {
    document.querySelector("img#paintjob").src = paintJob[2];
  }
  //SPOILER WIJZIGEN
  else if (event.target.id === "geen") {
    document.querySelector("img#spoiler").src = autoSpoiler[0];
  } else if (event.target.id === "spoiler1") {
    document.querySelector("img#spoiler").src = autoSpoiler[1];
  }
  //RAAMTINTEN WIJZIGEN
  else if (event.target.id === "blank") {
    document.querySelector("img#raam").src = autoRaam[0];
  } else if (event.target.id === "medium") {
    document.querySelector("img#raam").src = autoRaam[1];
  } else if (event.target.id === "dark") {
    document.querySelector("img#raam").src = autoRaam[2];
  }
  //VELGEN WIJZIGEN
  else if (event.target.id === "rimp1") {
    document.querySelector("img#velg").src = autoVelg[0];
  } else if (event.target.id === "rimp2") {
    document.querySelector("img#velg").src = autoVelg[1];
  } else if (event.target.id === "rimp3") {
    document.querySelector("img#velg").src = autoVelg[2];
  } else if (event.target.id === "rimp4") {
    document.querySelector("img#velg").src = autoVelg[3];
  } else if (event.target.id === "rimp5") {
    document.querySelector("img#velg").src = autoVelg[4];
  }
  //LICHTEN WIJZIGEN
  else if (event.target.id === "geel") {
    document.querySelector("img#licht").src = autoLicht[0];
  } else if (event.target.id === "xenon") {
    document.querySelector("img#licht").src = autoLicht[1];
  } else if (event.target.id === "led") {
    document.querySelector("img#licht").src = autoLicht[2];
  };
};

//RANDOM AUTO LATEN CREËREN
function createRandom() {

  //VARIABELLEN AANMAKEN DIE EEN RANDOM GETAL BEREKENEN OM EEN AFBEELDING TE SELECTERENUIT DE ARRAY VAN EEN ANDERE VARIABELLE
  var randomKleur = Math.random() * autoKleur.length;
  var randomJob = Math.random() * paintJob.length;
  var randomSpoiler = Math.random() * autoSpoiler.length;
  var randomRaam = Math.random() * autoRaam.length;
  var randomVelg = Math.random() * autoVelg.length;
  var randomLicht = Math.random() * autoLicht.length;

  //HET GETAL LATEN AFFLAKKEN
  randomKleur = Math.floor(randomKleur);
  randomJob = Math.floor(randomJob);
  randomSpoiler = Math.floor(randomSpoiler);
  randomRaam = Math.floor(randomRaam);
  randomVelg = Math.floor(randomVelg);
  randomLicht = Math.floor(randomLicht);

  //DE AFBEELDINGEN WIJZIGEN
  document.querySelector("img#auto").src = autoKleur[randomKleur];
  document.querySelector("img#paintjob").src = paintJob[randomJob];
  document.querySelector("img#spoiler").src = autoSpoiler[randomSpoiler];
  document.querySelector("img#raam").src = autoRaam[randomRaam];
  document.querySelector("img#velg").src = autoVelg[randomVelg];
  document.querySelector("img#licht").src = autoLicht[randomLicht];

}

//EVENT LISTENER TOEVOEGEN MET DE HANDLER 'CLICK' CLICK
buttonRandom.addEventListener("click", createRandom);


//CREËREN VAN EEN LOOP
for (var i = 0; i < buttonKleur.length; i++) {
  buttonKleur[i].addEventListener('click', wijzig);
};

for (var i = 0; i < buttonPaintjob.length; i++) {
  buttonPaintjob[i].addEventListener('click', wijzig);
};

for (var i = 0; i < buttonSpoiler.length; i++) {
  buttonSpoiler[i].addEventListener('click', wijzig);
};

for (var i = 0; i < buttonRaam.length; i++) {
  buttonRaam[i].addEventListener('click', wijzig);
};

for (var i = 0; i < buttonRimp.length; i++) {
  buttonRimp[i].addEventListener('click', wijzig);
  buttonRimp[i].addEventListener('click', playSound);
};

for (var i = 0; i < buttonLicht.length; i++) {
  buttonLicht[i].addEventListener('click', wijzig);
};
