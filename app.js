const API_KEY = "YOUR_API_KEY";
const city = "London";

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

axios.get(url)
  .then(function(response) {
    console.log(response.data);

    const data = response.data;

    const cityName = data.name;
    const temp = data.main.temp;
    const desc = data.weather[0].description;
    const icon = data.weather[0].icon;

    // Update DOM
    document.getElementById("city").innerText = cityName;
    document.getElementById("temp").innerText = `Temperature: ${temp}°C`;
    document.getElementById("desc").innerText = desc;
    document.getElementById("icon").src = `https://openweathermap.org/img/wn/${icon}@2x.png`;
  })
  .catch(function(error) {
    console.log("Error:", error);
  });