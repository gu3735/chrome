const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");
const API_KEY = "a0394b33d4d4fbce5ff4065e924d675a";

function onGeoOk(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
}
function onGeoError() {
    alert('당신의 위치를 알 수 없습니다. 날씨를 알 수 없습니다.')
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);