let questions = [
  "Что мне взять с собой на каток?",
  "Что мне положить в холодильник?",
  "Что мне взять с собой в школу?",
  "Что мне взять с собой в бассейн?",
];
let answers = ["коньки", "яблоки", "учебники", "полотенце"];

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

function randomArrayValue(arr) {
  return arr[Math.floor(Math.random() * 4)];
}

let num = prompt("Введите случайное число");
let question = randomArrayValue(questions);
let str = question + " : ";
for (let i = 0; i < getRandomInt(num); i++) {
  str += randomArrayValue(answers) + ", ";
}
alert(str);
