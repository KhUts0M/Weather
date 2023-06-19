function displayTemperature(response) {
  console.log(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
}
let apiKey = "b86b691495b465806abd366b749605e1";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Polokwane&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
