

const name = "Nicholas";
const currentYear = new Date().getFullYear();
const nameElement = document.querySelector("#name"); // Access the HTML element with the ID "name" and store it in a variable (alt z for soft wrap)
const yearElement = document.querySelector("#year"); // Access the HTML element with the ID "year" and store it in a variable

var favoriteFoods = ["Pasta", "Meat", "Potatoes"];
document.querySelector('#food').textContent = favoriteFoods;

var newFavoriteFood = "Tacos";
favoriteFoods.push(newFavoriteFood);

favoriteFoods.shift();
document.querySelector('#food').textContent = favoriteFoods;

favoriteFoods.pop();
document.querySelector('#food').textContent = favoriteFoods;


// document.querySelector('#elementId').attribute = 
// name = document.querySelector(Id)
// import datetime
// datetime datetime = now datetime();


