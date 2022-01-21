const weatherContainer = document.querySelector(".weather");
const tempArea = weatherContainer.querySelector(".temp");
const weatherArea = weatherContainer.querySelector(".weatherSub");
const cityArea = weatherContainer.querySelector(".city");

const API_KEY = "c157de22d60f3e85cb7fcc67b064eeba";

function onGeoOK(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then(response => response.json()).then(data => {
    const temp = Math.round(data.main.temp);
    const weather = data.weather[0].main;
    const city = data.name;
    tempArea.innerHTML = `Temp: ${temp}℃`;
    weatherArea.innerHTML = `Weather: ${weather}`;
    cityArea.innerHTML = `City: ${city}`;
  });
}

function onGeoError() {
  alert("Can't Find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOK, onGeoError);
