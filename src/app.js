/* eslint-disable */
//import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here
  let pinta = generateRandomSuit();

  if (pinta == "♥" || pinta == "♦") {
    document.querySelector(".PintaArriba").style.color = "red";
    document.querySelector(".PintaAbajo").style.color = "red";
  }

  document.querySelector(".PintaArriba").innerHTML = pinta;
  document.querySelector(".PintaAbajo").innerHTML = pinta;
  document.querySelector(".Number").innerHTML = generateRandomNumber();
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "9", "10", "J", "K", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};
let generateRandomSuit = () => {
  let suit = ["♦", "♠", "♥", "♣"];
  let indexSuit = Math.floor(Math.random() * suit.length);
  return suit[indexSuit];
};
