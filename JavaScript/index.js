//----------------------Random Dice Only run the First Time the page is run-------------------//
i=0;
while(i<1){
var randomValueI = Math.random();
var randomValueII = randomValueI*6;
var randomValue1 =  Math.ceil(randomValueII);

var randomValueIII = Math.random();
var randomValueIV = randomValueIII*6;
var randomValue2 =  Math.ceil(randomValueIV);

var diceNameLeft = ("dice" + randomValue1 + ".png");
var diceNameRight = ("dice" + randomValue2 + ".png");

var leftSide = document.querySelectorAll("img")[0];
var rightSide = document.querySelectorAll("img")[1];

leftSide.setAttribute("src", "images/" + diceNameLeft);
rightSide.setAttribute("src", "images/" + diceNameRight);

var user1Name; //You have to declare these up here to make them a global variable.
var user2Name;
i++
};

  //----------------------Random Dice Funtion-------------------//
  function reRun(){
  var randomValueI = Math.random();
  var randomValueII = randomValueI*6;
  var randomValue1 =  Math.ceil(randomValueII);

  var randomValueIII = Math.random();
  var randomValueIV = randomValueIII*6;
  var randomValue2 =  Math.ceil(randomValueIV);

  var diceNameLeft = ("dice" + randomValue1 + ".png");
  var diceNameRight = ("dice" + randomValue2 + ".png");

  var leftSide = document.querySelectorAll("img")[0];
  var rightSide = document.querySelectorAll("img")[1];

  leftSide.setAttribute("src", "images/" + diceNameLeft);
  rightSide.setAttribute("src", "images/" + diceNameRight);

  if(document.querySelectorAll(".container p")[0].textContent == "Player 1" && document.querySelectorAll(".container p")[1].textContent == "Player 2")
  {
    if (randomValue1>randomValue2){
      document.querySelectorAll(".container h1")[0].textContent = "Player1 Won🎈";
      }
      else if (randomValue1<randomValue2){
        document.querySelectorAll(".container h1")[0].textContent = "🎈Player2 Won";
      }
      else if (randomValue1==randomValue2){
        document.querySelectorAll(".container h1")[0].textContent = "It's a tie🎗";
      }
    }

    else if (document.querySelectorAll(".container p")[0].textContent != "Player 1" && document.querySelectorAll(".container p")[1].textContent != "Player 2")
    {
      if (randomValue1>randomValue2){
        document.querySelectorAll(".container h1")[0].textContent = user1Name + " Won🎈";
        }
        else if (randomValue1<randomValue2){
          document.querySelectorAll(".container h1")[0].textContent = "🎈" + user2Name + " Won";
        }
        else if (randomValue1==randomValue2){
          document.querySelectorAll(".container h1")[0].textContent = "It's a tie🎗";
        }
    }
};

//----------------------Asking Users for their Names Function---------//
function askUserName(){
user1Name = prompt("Hello! Input the name of player 1. Maximum # of characters you can input is of 9 letters.")
user2Name = prompt("Hello! Input the name of player 2. Maximum # of characters you can input is of 9 letters.")
var firstLetter1 = user1Name.slice(0,1).toUpperCase();
var firstNameLength = user1Name.length;
var restLetters1 = user1Name.slice(1,firstNameLength).toLowerCase();
user1Name = firstLetter1 + restLetters1;
user1Name = user1Name.slice(0,9);
var firstLetter2 = user2Name.slice(0,1).toUpperCase();
var secondNameLength = user2Name.length;
var restLetters2 = user2Name.slice(1,secondNameLength).toLowerCase();
user2Name = firstLetter2 + restLetters2;
user2Name = user2Name.slice(0,9);
document.querySelectorAll(".container p")[0].textContent = user1Name;
document.querySelectorAll(".container p")[1].textContent = user2Name;

if (document.querySelectorAll(".container p")[0].textContent == "" && document.querySelectorAll(".container p")[1].textContent == "")
  {
    document.querySelectorAll(".container p")[0].textContent = "Player 1"
    document.querySelectorAll(".container p")[1].textContent = "Player 2"
  }

};

function giveDefaultName(){
user1Name = "Player 1";
user2Name = "Player 2";
document.querySelectorAll(".container p")[0].textContent = user1Name;
document.querySelectorAll(".container p")[1].textContent = user2Name;
};


//----------------------Once Button is clicked the function is ran.-------------------//
var button2Target = document.querySelectorAll(".btnSize2")[0];
button2Target.addEventListener("click", askUserName);

var button2Target = document.querySelectorAll(".btnSize2")[1];
button2Target.addEventListener("click", giveDefaultName);

var buttonTarget = document.querySelectorAll(".btnSize")[0];
buttonTarget.addEventListener("click",reRun);
