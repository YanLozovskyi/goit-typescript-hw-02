/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum DayOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

const dayNames = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const isWeekend = (day: DayOfWeek) => {
  const dayName = dayNames[day];

  return day <= 4
    ? console.log(`${dayName} is a working day`)
    : console.log(`${dayName} is a day off`);
};

isWeekend(DayOfWeek.Friday);
isWeekend(DayOfWeek.Saturday);
isWeekend(DayOfWeek.Monday);
