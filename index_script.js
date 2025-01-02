const birth = document.getElementById("birth");
let birthDateObject, birthDate, birthMonth, birthYear;
let currentDateObject, currentDate, currentMonth, currentYear;

// User may like to choose manually from numpad instead of a old model calendar
function getBirthDate() {
  console.log(birth.value);
  birthDateObject = birth.value.split("-");
  birthDate = parseInt(birthDateObject[2]);
  console.log(`birthDate = ${birthDate}`);
  console.log(typeof birthDate);
  birthMonth = parseInt(birthDateObject[1]);
  console.log(`birthMonth = ${birthMonth}`);
  console.log(typeof birthMonth);
  birthYear = parseInt(birthDateObject[0]);
  console.log(`birthYear = ${birthYear}`);
  console.log(typeof birthYear);
}

currentDateObject = new Date();
currentDate = currentDateObject.getDate();
console.log(`currentDate = ${currentDate}`);
console.log(typeof currentDate);
currentMonth = currentDateObject.getMonth() + 1;
console.log(`currentMonth = ${currentMonth}`);
console.log(typeof currentMonth);
currentYear = currentDateObject.getFullYear();
console.log(`currentYear = ${currentYear}`);
console.log(typeof currentYear);
const current = document.getElementById("current");
if (currentMonth / 10 < 1 && currentDate / 10 < 1) {
  current.value = `${currentYear}-0${currentMonth}-0${currentDate}`;
} else if (currentMonth / 10 < 1) {
  current.value = `${currentYear}-0${currentMonth}-${currentDate}`;
} else if (currentDate / 10 < 1) {
  current.value = `${currentYear}-${currentMonth}-0${currentDate}`;
} else current.value = `${currentYear}-${currentMonth}-${currentDate}`;

// User may like to choose manually from numpad instead of a old model calendar
function getCurrentDate() {
  console.log(current.value);
  currentDateObject = current.value.split("-");
  currentDate = parseInt(currentDateObject[2]);
  console.log(`currentDate = ${currentDate}`);
  console.log(typeof currentDate);
  currentMonth = parseInt(currentDateObject[1]);
  console.log(`currentMonth = ${currentMonth}`);
  console.log(typeof currentMonth);
  currentYear = parseInt(currentDateObject[0]);
  console.log(`currentYear = ${currentYear}`);
  console.log(typeof currentYear);
}
