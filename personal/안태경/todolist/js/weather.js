const API_KEY = "317973f84ec67f1014ac70af4988ecfb";
const weatherDiv = document.querySelector("#weather");
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url).then((response) =>
    response.json().then((data) => {
      //   const weatherIcon = document.createElement("img");
      //   weatherIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
      //   weatherIcon.alt = "icon";
      //   weatherDiv.appendChild(weatherIcon);

      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${Math.ceil(
        data.main.temp
      )}°C`;
    })
  );
}
function onGeoError() {
  alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
