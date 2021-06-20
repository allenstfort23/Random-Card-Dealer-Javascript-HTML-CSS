/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let suiteTop = document.querySelector(".top-logo"); // this contains the top sutie
  let suiteBottom = document.querySelector(".bottom-logo"); // this contains the bottom suite
  let suiteNumber = document.querySelector(".number"); // this contains the number of the suite

  let generateRandomNumber = () => {
    let numbers = [
      "A",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "10",
      "J",
      "Q",
      "K"
    ];
    let randomNumbers = Math.floor(Math.random() * numbers.length);
    return numbers[randomNumbers];
  };

  let generatorRandomSuite = () => {
    let suite = ["&spades;", "&hearts;", "&diams;", "&clubs;"];
    let randomSuite = Math.floor(Math.random() * suite.length);
    return suite[randomSuite];
  };

  suiteNumber.innerHTML = generateRandomNumber();
  let same = generatorRandomSuite();
  let top = (suiteTop.innerHTML = same);
  let bottom = (suiteBottom.innerHTML = same);
};
