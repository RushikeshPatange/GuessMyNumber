"use strict";

// testing JS file linking ->

// const tem = document.querySelector(".message");
// tem.style.backgroundColor = "red";
// const body = document.querySelector("body");
// body.style.backgroundColor = "green";
// console.log(tem);

const secreteNo = document.querySelector(".guess");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const number = document.querySelector(".number");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const body = document.querySelector("body");
const highscore = document.querySelector(".highscore");
const main = document.querySelector("main");
const header = document.querySelector("header");
const between = document.querySelector(".between");

// console.log(secreteNo, message, score);

// console.log(typeof secreteNo.value); string
// score.textContent = 30;
// message.textContent = "Winner";
// number.textContent = 60;

let scoreholder;
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// console.log(randomNumber);
let preHighScore = 0;

const between1And20 = (x) => {
  if (x < 1 || x > 20) {
    alert("Enter Number in Between 1 and 20");
    between.style.backgroundColor = "red";
  } else {
    between.style.backgroundColor = "initial";
  }
};

const isScore0 = () => {
  if (scoreholder === 0) {
    // score.textContent = 0;
    number.textContent = "?";
    message.textContent = "You loose the game";
    body.style.backgroundColor = "red";
    header.style.color = "black";
    main.style.color = "black";
    number.style.color = "black";

    console.log("Tested.....");
  }
};

const islow = () => {
  if (scoreholder > 0) {
    message.textContent = "Too Low";
    // x = score.textContent;
    score.textContent = --scoreholder;
  }
};

const isHigh = () => {
  if (scoreholder > 0) {
    message.textContent = "Too High";
    score.textContent = --scoreholder;
  }
};

const checkNumber = () => {
  const guess = Number(secreteNo.value);
  scoreholder = Number(score.textContent);

  between1And20(guess);
  isScore0(guess);

  if (!guess) {
    // console.log(guess, typeof guess);
    message.textContent = "No number at input";
  } else if (guess === randomNumber) {
    message.textContent = "You Win the game";
    highscore.textContent = Math.max(preHighScore, scoreholder);
    preHighScore = highscore.textContent;

    number.textContent = guess;
    number.style.width = "30rem";
    body.style.backgroundColor = "lawngreen";
    header.style.color = "black";
    main.style.color = "black";
  } else if (randomNumber < guess) {
    isHigh();
    isScore0();
  } else {
    islow();
    isScore0();
  }
};

const resetGame = () => {
  number.textContent = "?";
  message.textContent = "Start guessing...";
  body.style.backgroundColor = "#222";
  header.style.color = "white";
  main.style.color = "white";
  number.style.width = "15rem";
  score.textContent = 20;
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber);
  secreteNo.value = "";
};
checkBtn.addEventListener("click", checkNumber);

againBtn.addEventListener("click", resetGame);
