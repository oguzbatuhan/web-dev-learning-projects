const apiKey = "6c55554e791138f679b499931f029e86";
const searchBtn = document.getElementById("searchBtn");
const cityInput = document.getElementById("cityInput");
const weatherInfo = document.getElementById("weatherInfo");

function getWeather() {
  const city = cityInput.value.trim();

  if (city === "") {
    weatherInfo.innerHTML = "<p>Lütfen bir şehir ismi girin.</p>";
    return;
  }

  weatherInfo.innerHTML = "<p>Yükleniyor...</p>";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&lang=tr&units=metric`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.cod === "404") {
        weatherInfo.innerHTML = "<p>Şehir bulunamadı.</p>";
        return;
      }

      const html = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p>🌡️ Sıcaklık: ${data.main.temp}°C</p>
        <p>☁️ Durum: ${data.weather[0].description}</p>
        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png">
      `;
      weatherInfo.innerHTML = html;
      cityInput.value = "";
    })
    .catch((err) => {
      weatherInfo.innerHTML = "<p>Bir hata oluştu.</p>";
    });
}

searchBtn.addEventListener("click", getWeather);

cityInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    getWeather();
  }
});
