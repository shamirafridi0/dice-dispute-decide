/* const imag = [
    "images/dice1.png",
    "images/dice2.png",
    "images/dice3.png",
    "images/dice4.png",
    "images/dice5.png",
    "images/dice6.png"
]

var randomNumber1 = Math.floor(Math.random() * imag.length) + 1;
var randomNumber2 = Math.floor(Math.random() * imag.length) + 1;

var image1 = document.getElementsByClassName("img1")[0];
var image2 = document.getElementsByClassName("img2")[0];

image1.setAttribute("src", imag[randomNumber1]);
image2.setAttribute("src", imag[randomNumber2]);

if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "Draw";

}
else if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else {
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
} */


// for player 1

var randomNumber1 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage1 = "dice" + randomNumber1 + ".png";

var randomImageSource1 = "images/" + randomDiceImage1;

var firstPlayerQuery = document.querySelectorAll("img")[0];

firstPlayerQuery.setAttribute("src", randomImageSource1);


// for player 2
var randomNumber2 = Math.floor(Math.random() * 6) + 1;

var randomDiceImage2 = "dice" + randomNumber2 + ".png";

var randomImageSource2 = "images/" + randomDiceImage2;

var secondPlayerQuery = document.querySelectorAll("img")[1];

secondPlayerQuery.setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins!";
}

else if (randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Player 2 Wins!";
}

else{
    document.querySelector("h1").innerHTML = "Draw!";
}





