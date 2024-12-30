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
current.value = `${currentYear}-${currentMonth}-${currentDate}`;

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

function ageCalculation() {
  const calculatedAge = document.getElementById("calculatedAge");
  if (birth.value === "" || current.value === "") {
    calculatedAge.innerHTML = "Enter Birth Date Above...";
    return;
  }

  if (
    birthYear === currentYear &&
    birthMonth === currentMonth &&
    birthDate > currentDate
  ) {
    calculatedAge.innerHTML = "INVALID DATA GIVEN";
    return;
  }
  if (birthYear === currentYear && birthMonth > currentMonth) {
    calculatedAge.innerHTML = "INVALID DATA GIVEN";
    return;
  }
  if (birthYear > currentYear) {
    calculatedAge.innerHTML = "INVALID DATA GIVEN";
    return;
  }

  let ageYear, ageMonth, ageDay;
  ageYear = currentYear - birthYear;

  if (birthMonth > currentMonth) {
    ageYear -= 1;
    ageMonth = 12 - birthMonth + currentMonth;
  } else ageMonth = currentMonth - birthMonth;

  if (birthDate > currentDate) {
    ageMonth -= 1;
    switch (currentMonth) {
      case 1:
      case 2:
      case 4:
      case 6:
      case 8:
      case 9:
      case 11:
        ageDay = 31 - birthDate + currentDate;
        break;
      case 3:
        if (
          (currentYear % 4 === 0 && currentYear % 400 !== 0) ||
          currentYear % 400 === 0
        ) {
          if (29 - birthDate < 0) ageDay = currentDate;
          else ageDay = 29 - birthDate + currentDate;
        } else ageDay = 28 - birthDate + currentDate;
        break;
      case 5:
      case 7:
      case 10:
      case 12:
        if (30 - birthDate < 0) ageDay = currentDate;
        else ageDay = 30 - birthDate + currentDate;
        break;
    }
  } else ageDay = currentDate - birthDate;

  if (ageYear === 0 && ageMonth === 0 && ageDay === 0)
    calculatedAge.innerHTML = "Happy Born-Day!!!";
  else if (ageYear === 0 && ageMonth === 0)
    calculatedAge.innerHTML = `You're ${ageDay}Days Old.`;
  else if (ageYear === 0 && ageDay === 0)
    calculatedAge.innerHTML = `You're ${ageMonth}Months Old.`;
  else if (ageMonth === 0 && ageDay === 0)
    calculatedAge.innerHTML = `You're ${ageYear}Years Old.`;
  else if (ageYear === 0)
    calculatedAge.innerHTML = `You're ${ageMonth}Months, ${ageDay}Days Old.`;
  else if (ageMonth === 0)
    calculatedAge.innerHTML = `You're ${ageYear}Years, ${ageDay}Days Old.`;
  else if (ageDay === 0)
    calculatedAge.innerHTML = `You're ${ageYear}Years, ${ageMonth}Months Old.`;
  else
    calculatedAge.innerHTML = `You're ${ageYear}Years, ${ageMonth}Months, ${ageDay}Days Old.`;
}
