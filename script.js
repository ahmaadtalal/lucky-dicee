window.onload = function () {

    if (!sessionStorage.getItem("loadedOnce")) {

      document.querySelector(".img1").setAttribute("src", "./images/dice1.png");
      document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
      document.querySelector("h1").innerText = "Refresh The Page!";
      
      sessionStorage.setItem("loadedOnce", "true");
    }
};


var randomNumber1 = Math.floor((Math.random() * 6) + 1);
 
var randomDiceImage = "dice" + randomNumber1 + ".png";

var randomImageSource = "./images/" + randomDiceImage;

document.querySelector(".img1").setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor((Math.random() * 6) + 1);

var randomImageSource2 = "./images/dice" + randomNumber2 + ".png";

document.querySelector(".img2").setAttribute("src", randomImageSource2);

if (randomImageSource == randomImageSource2) {
    document.querySelector("h1").innerText = "Draw!";
}

else if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerText = "Player 1 Wins!";
}

else if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerText = "Player 2 Wins!";
}