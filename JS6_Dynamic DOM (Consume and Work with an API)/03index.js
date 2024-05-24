// const weatherData = {
//   location: {
//     name: "Milan",
//     region: "Lombardia",
//     country: "Italy",
//     lat: 45.47,
//     lon: 9.2,
//     tz_id: "Europe/Rome",
//     localtime_epoch: 1716532770,
//     localtime: "2024-05-24 8:39",
//   },
//   current: {
//     last_updated_epoch: 1716532200,
//     last_updated: "2024-05-24 08:30",
//     temp_c: 15.0,
//     temp_f: 59.0,
//     is_day: 1,
//     condition: {
//       text: "Partly cloudy",
//       icon: "//cdn.weatherapi.com/weather/64x64/day/116.png",
//       code: 1003,
//     },
//     wind_mph: 3.8,
//     wind_kph: 6.1,
//     wind_degree: 120,
//     wind_dir: "ESE",
//     pressure_mb: 1019.0,
//     pressure_in: 30.09,
//     precip_mm: 0.01,
//     precip_in: 0.0,
//     humidity: 82,
//     cloud: 25,
//     feelslike_c: 15.8,
//     feelslike_f: 60.4,
//     vis_km: 10.0,
//     vis_miles: 6.0,
//     uv: 4.0,
//     gust_mph: 8.3,
//     gust_kph: 13.3,
//   },
// };

const tempRef = document.querySelector(".temp");
const timeLocRef = document.querySelector(".time_location span");
const locationRef = document.querySelector(".time_location p");
const imgRef = document.querySelector(".weather_condition p img");
const conditionRef = document.querySelector(".weather_condition span");

function locationDetails(weatherData) {
  const day = weatherData.current.is_day;
  const arr = weatherData.current.last_updated.split(" ");
  return arr[1] + " " + locationDay(day) + " " + arr[0];
}

function locationDay(day) {
  if (day == 0) {
    return "Sunday";
  } else if (day == 1) {
    return "Monday";
  } else if (day == 2) {
    return "Tuesday";
  } else if (day == 3) {
    return "Wednesday";
  } else if (day == 4) {
    return "Thursday";
  } else if (day == 5) {
    return "Friday";
  } else if (day == 6) {
    return "Saturday";
  }
}

function renderWeatherData(weatherData) {
  tempRef.innerText = weatherData.current.temp_c;
  timeLocRef.innerText = locationDetails(weatherData);
  locationRef.innerText = weatherData.location.name;
  conditionRef.innerText = weatherData.current.condition.text;
  imgRef.src = weatherData.current.condition.icon;
}

// renderWeatherData(weatherData);

const btnRef = document.querySelector(".btn");
const inputRef = document.querySelector(".searchField");
const formRef = document.querySelector("nav form");

formRef.addEventListener("submit", function (e) {
  e.preventDefault();
  const inputValue = inputRef.value;
  console.log(inputValue);
  fetchWeatherData(inputValue);
});

function fetchWeatherData(location) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=35af7ff606db422880d141328231305&q=${location}&aqi=no`
  )
    .then((response) => response.json()) // convert serialize data into json data format
    // .then((data) => console.log("Success with strinigify", data)) //
    .then((data) => renderWeatherData(data))
    .catch((err) => console.log("Failure", err));
}
