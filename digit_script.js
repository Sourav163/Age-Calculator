// digit
const current_date_object = new Date();
const birth_month = document.getElementById("birth_month");
const birth_year = document.getElementById("birth_year");
const current_date = document.getElementById("current_date");
const birth_date = document.getElementById("birth_date");
const current_month = document.getElementById("current_month");
const current_year = document.getElementById("current_year");

let currentDate = current_date_object.getDate();
if (currentDate / 10 < 1) current_date.value = `0${currentDate}`;
else current_date.value = `${currentDate}`;
console.log(typeof currentDate);

let currentMonth = current_date_object.getMonth() + 1;
if (currentMonth / 10 < 1) current_month.value = `0${currentMonth}`;
else current_month.value = `${currentMonth}`;
console.log(typeof currentMonth);

let currentYear = current_date_object.getFullYear();
current_year.value = `${currentYear}`;
console.log(typeof currentDate);

function get_current_date_info() {
  currentDate = parseInt(current_date.value);
  if (currentDate / 10 < 1) current_date.value = `0${currentDate}`;
}
function get_current_month_info() {
  currentMonth = parseInt(current_month.value);
  if (currentMonth / 10 < 1) current_month.value = `0${currentMonth}`;
  date_fix(current_date, currentDate, currentMonth, currentYear);
}
function get_current_year_info() {
  currentYear = parseInt(current_year.value);
  date_fix(current_date, currentDate, currentMonth, currentYear);
}

let birthDate, birthMonth, birthYear;

function get_birth_date_info() {
  birthDate = parseInt(birth_date.value);
  if (birthDate / 10 < 1) birth_date.value = `0${birthDate}`;
}
function get_birth_month_info() {
  birthMonth = parseInt(birth_month.value);
  if (birthMonth / 10 < 1) birth_month.value = `0${birthMonth}`;
  date_fix(birth_date, birthDate, birthMonth, birthYear);
}
function get_birth_year_info() {
  birthYear = parseInt(birth_year.value);
  date_fix(birth_date, birthDate, birthMonth, birthYear);
}

function date_fix(date_id, date, month, year) {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      date_id.max = "31";
      break;
    case 2:
      if ((year % 4 === 0 && year % 400 !== 0) || year % 400 === 0) {
        if (date > 29) {
          date = 29;
          date_id.value = date;
        }
        date_id.max = "29";
      } else {
        if (date > 28) {
          date = 28;
          date_id.value = date;
        }
        date_id.max = "28";
      }
      break;
    default:
      if (date > 30) {
        date = 30;
        date_id.value = date;
      }
      date_id.max = "30";
  }
}
