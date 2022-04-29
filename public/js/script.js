const sortes = require('../../mockup');

const arrayLength = sortes.length
function getRandomInt(min, max) {   min = Math.ceil(min);   max = Math.floor(max);   return Math.floor(Math.random() * (max - min)) + min; }
const randomNumber = getRandomInt(0, arrayLength - 1);

const phrase = document.getElementById('result');
console.log(phrase);
phrase.innerHTML = sortes[randomNumber];