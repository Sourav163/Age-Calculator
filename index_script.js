const birth = document.getElementById("birth");
let birthDateObject, birthDate, birthMonth, birthYear;
let currentDateObject, currentDate, currentMonth, currentYear;

// User may like to choose manually from numpad instead of a old model calendar
function getBirthDate() {
  birthDateObject = birth.value.split("-");
  birthDate = parseInt(birthDateObject[2]);
  birthMonth = parseInt(birthDateObject[1]);
  birthYear = parseInt(birthDateObject[0]);
}

currentDateObject = new Date();
currentDate = currentDateObject.getDate();
currentMonth = currentDateObject.getMonth() + 1;
currentYear = currentDateObject.getFullYear();
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
  currentDateObject = current.value.split("-");
  currentDate = parseInt(currentDateObject[2]);
  currentMonth = parseInt(currentDateObject[1]);
  currentYear = parseInt(currentDateObject[0]);
}
