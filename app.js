const apikey = "aafa955860b7c14dd8b2d06a05386657";


const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
/* 
   Base URL for OpenWeatherMap API, using metric units to get weather data by city name.
*/

const searchBox = document.querySelector(".search input");


const searchBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");

const errorDiv = document.querySelector(".error");
/* 
   Selects the error div element where error messages (e.g., city not found) will be displayed.
*/

const weatherDiv = document.querySelector(".weather");
/* 
   Selects the weather div element that contains the weather information to be displayed when a valid city is found.
*/

/* 
   Function: checkWeather
   Purpose: Fetch weather data from the OpenWeatherMap API for a specified city and update the UI.
   Params: city (string) - the name of the city to get weather data for.
*/
async function checkWeather(city) {
  try {
    /* 
       Fetches weather data from the API by appending the city name and API key to the URL.
    */
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    const data = await response.json();

    /* 
       If the city is not found (404 status), an error is thrown.
    */
    if (response.status === 404) {
      throw new Error("City not found");
    }

    /* 
       Hides the error message and shows the weather data div if a valid city is found.
    */
    errorDiv.style.display = "none";
    weatherDiv.style.display = "block";

    /* 
       Updates the DOM with the weather data: city name, temperature, humidity, and wind speed.
    */
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = `${Math.round(
      data.main.temp
    )}°C`;
    document.querySelector(".humidity").innerHTML = `${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML = `${data.wind.speed} km/h`;

    /* 
       Switch case to determine which weather icon to display based on the weather condition (Clouds, Clear, Rain, etc.).
    */
    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "./images/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "./images/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "./images/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "./images/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "./images/mist.png";
        break;
      default:
        weatherIcon.src = "./images/default.png"; 
    }
  } catch (error) {
    /* 
       Displays the error message div and hides the weather data div if an error occurs (e.g., city not found).
    */
    errorDiv.style.display = "block";
    weatherDiv.style.display = "none";
    console.error(error);
  }
}

/* 
   Event Listener: When the search button is clicked, the checkWeather function is called with the value from the search input.
*/
searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});

//for testing purposes
module.exports = { checkWeather };

