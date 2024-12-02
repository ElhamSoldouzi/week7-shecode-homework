function updateWeatherInfo(response) {
  let temperatureNumberElement = document.querySelector("#number");
  temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#city");

  cityElement.innerHTML = response.data.city;
  temperatureNumberElement.innerHTML = Math.round(temperature);
}

function searchCity(city) {
  let apiKey = "4e4452b3b8e30dte63o4ebba04a0fef4";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeatherInfo);
}

function searchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-form-input");

  searchCity(searchInput.value);
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
