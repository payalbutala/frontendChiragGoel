const prevButtonRef = document.querySelector(".prev");
const nextButtonRef = document.querySelector(".next");
const monthSelectRef = document.querySelector(".month");
const yearSelectRef = document.querySelector(".year");
const datesRef = document.querySelector(".dates");
// const daysRef = document.querySelector(".days");
const todayButtonRef = document.querySelector(".today-section button");

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

const todaysDate = new Date();
// console.log(todaysDate);

function generateMonthOptions() {
  const monthsFragement = document.createElement("div");
  MONTHS.forEach((month, idx) => {
    // console.log(month);
    const createOption = document.createElement("option");
    createOption.value = idx;
    createOption.innerText = month;
    todaysDate.getMonth() === idx
      ? createOption.setAttribute("selected", "selected")
      : ""; // it will highlight current month
    // console.log(createOption);
    monthsFragement.appendChild(createOption);
  });
  monthSelectRef.innerHTML = monthsFragement.innerHTML;
}

function generateYearOptions() {
  const yearFragement = document.createElement("div");
  const currentYear = todaysDate.getFullYear();
  // console.log(currentYear);
  for (i = currentYear - 10; i <= currentYear + 10; i++) {
    const createOption = document.createElement("option");
    createOption.innerText = i;
    createOption.value = i;
    currentYear === i ? createOption.setAttribute("selected", "selected") : "";
    yearFragement.appendChild(createOption);
  }
  yearSelectRef.innerHTML = yearFragement.innerHTML;
}

function generateDays(year, month) {
  // 2024, 8, 1 => return numeric value denotes : on 1st September(index 8) 2024 : its 0 means SUNDAY
  const startDay = new Date(year, month, 1).getDay();
  // 2024, 8, 0 => return numeric value denotes : on 31st August(index month+1=8) 2024 : 31 days
  const totalDaysInMonth = new Date(year, month + 1, 0).getDate();
  // console.log(startDay, totalDaysInMonth);

  datesRef.innerHTML = ""; // clean already existing html
  const daysFragement = document.createElement("div");

  // empty span as 1st start from friday or saturday
  for (let noDay = 0; noDay < startDay; noDay++) {
    const spanRef = document.createElement("span");
    daysFragement.appendChild(spanRef);
  }

  // console.log(daysFragement.innerHTML);

  // creating span with date value
  for (let dateEle = 1; dateEle <= totalDaysInMonth; dateEle++) {
    const spanRef = document.createElement("span");
    spanRef.innerText = `${dateEle}`;
    spanRef.setAttribute("data-id", `${dateEle}`);
    spanRef.innerText = `${dateEle}`;
    todaysDate.getDate() === dateEle ? (spanRef.style.fontWeight = "bold") : "";
    daysFragement.appendChild(spanRef);
  }
  // console.log(daysFragement.innerHTML);
  datesRef.innerHTML = daysFragement.innerHTML;
  // console.log(datesRef.innerHTML);
}

generateMonthOptions();
generateYearOptions();
generateDays(2024, 5); // 2024 June (month index start from 0)

monthSelectRef.addEventListener("change", function (ev) {
  const selectedMonth = ev.target.value;
  const selectedYear = yearSelectRef.value;
  generateDays(selectedYear, selectedMonth);
});

yearSelectRef.addEventListener("change", function (ev) {
  const selectedMonth = monthSelectRef.value;
  const selectedYear = ev.target.value;
  generateDays(selectedYear, selectedMonth);
});

nextButtonRef.addEventListener("click", function () {
  let selectedMonth = +monthSelectRef.value;
  let selectedYear = +yearSelectRef.value;

  if (selectedMonth == 11) {
    yearSelectRef.value = selectedYear + 1;
    monthSelectRef.value = 0;
  } else {
    monthSelectRef.value = selectedMonth + 1;
  }

  generateDays(yearSelectRef.value, monthSelectRef.value);
});

prevButtonRef.addEventListener("click", function () {
  let selectedMonth = +monthSelectRef.value;
  let selectedYear = +yearSelectRef.value;

  if (selectedMonth == 0) {
    yearSelectRef.value = selectedYear - 1;
    monthSelectRef.value = 11;
  } else {
    monthSelectRef.value = selectedMonth - 1;
  }

  generateDays(yearSelectRef.value, monthSelectRef.value);
});

todayButtonRef.addEventListener("click", function () {
  yearSelectRef.value = todaysDate.getFullYear();
  monthSelectRef.value = todaysDate.getMonth();
  generateDays(yearSelectRef.value, monthSelectRef.value);
});
