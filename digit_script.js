// digit
const current_date_object = new Date();
let birth_date = document.getElementById("birth_date");
let birth_month = document.getElementById("birth_month");
let birth_year = document.getElementById("birth_year");
let current_date = document.getElementById("current_date");
let current_month = document.getElementById("current_month");
let current_year = document.getElementById("current_year");

let currentDate = current_date_object.getDate();
if (currentDate / 10 < 1) current_date.value = `0${currentDate}`;
else current_date.value = `${currentDate}`;

let currentMonth = current_date_object.getMonth() + 1;
if (currentMonth / 10 < 1) current_month.value = `0${currentMonth}`;
else current_month.value = `${currentMonth}`;

let currentYear = current_date_object.getFullYear();
current_year.value = `${currentYear}`;

function get_current_date_info() {
  currentDate = current_date.value;
  if (currentDate / 10 < 1) current_date.value = `0${currentDate}`;
}
function get_current_month_info() {
  get_current_month = current_month.value;
  if (currentMonth / 10 < 1) current_month.value = `0${currentMonth}`;
}
function get_current_year_info() {
  currentYear = current_year.value;
}

let birthDate, birthMonth, birthYear;

function get_birth_date_info() {
  birthDate = birth_date.value;
  if (birthDate / 10 < 1) birth_date.value = `0${birthDate}`;
}
function get_birth_month_info() {
  birthMonth = birth_month.value;
  if (birthMonth / 10 < 1) birth_month.value = `0${birthMonth}`;
}
function get_birth_year_info() {
  birthYear = birth_year.value;
}

// function age_calculation() {
//   const calculatedAge = document.getElementById("calculatedAge");
//   if (birth.value === "" || current.value === "") {
//     calculatedAge.innerHTML = "Enter Birth Date Above...";
//     return;
//   }

//   if (
//     birth_year === current_year &&
//     birth_month === current_month &&
//     birthDate > currentDate
//   ) {
//     calculatedAge.innerHTML = "INVALID DATA GIVEN";
//     return;
//   }
//   if (birth_year === current_year && birth_month > current_month) {
//     calculatedAge.innerHTML = "INVALID DATA GIVEN";
//     return;
//   }
//   if (birth_year > current_year) {
//     calculatedAge.innerHTML = "INVALID DATA GIVEN";
//     return;
//   }

//   let ageYear, ageMonth, ageDay;
//   ageYear = current_year - birth_year;

//   if (birth_month > current_month) {
//     ageYear -= 1;
//     ageMonth = 12 - birth_month + current_month;
//   } else ageMonth = current_month - birth_month;

//   if (birthDate > currentDate) {
//     ageMonth -= 1;
//     if (ageMonth === -1) {
//       ageMonth = 11;
//       ageYear -= 1;
//     }
//     switch (current_month) {
//       case 1:
//       case 2:
//       case 4:
//       case 6:
//       case 8:
//       case 9:
//       case 11:
//         ageDay = 31 - birthDate + currentDate;
//         break;
//       case 3:
//         if (
//           (current_year % 4 === 0 && current_year % 400 !== 0) ||
//           current_year % 400 === 0
//         ) {
//           if (29 - birthDate < 0) ageDay = currentDate;
//           else ageDay = 29 - birthDate + currentDate;
//         } else ageDay = 28 - birthDate + currentDate;
//         break;
//       case 5:
//       case 7:
//       case 10:
//       case 12:
//         if (30 - birthDate < 0) ageDay = currentDate;
//         else ageDay = 30 - birthDate + currentDate;
//         break;
//     }
//   } else ageDay = currentDate - birthDate;

//   if (ageYear === 0 && ageMonth === 0 && ageDay === 0)
//     calculatedAge.innerHTML = "Happy Born-Day!!!";
//   else if (ageYear === 0 && ageMonth === 0)
//     calculatedAge.innerHTML = `You're ${ageDay}Days Old.`;
//   else if (ageYear === 0 && ageDay === 0)
//     calculatedAge.innerHTML = `You're ${ageMonth}Months Old.`;
//   else if (ageMonth === 0 && ageDay === 0)
//     calculatedAge.innerHTML = `You're ${ageYear}Years Old.`;
//   else if (ageYear === 0)
//     calculatedAge.innerHTML = `You're ${ageMonth}Months, ${ageDay}Days Old.`;
//   else if (ageMonth === 0)
//     calculatedAge.innerHTML = `You're ${ageYear}Years, ${ageDay}Days Old.`;
//   else if (ageDay === 0)
//     calculatedAge.innerHTML = `You're ${ageYear}Years, ${ageMonth}Months Old.`;
//   else
//     calculatedAge.innerHTML = `You're ${ageYear}Years, ${ageMonth}Months, ${ageDay}Days Old.`;
// }
