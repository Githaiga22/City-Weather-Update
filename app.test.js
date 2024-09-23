// Importing necessary dependencies for mocking DOM and API
const { JSDOM } = require("jsdom");
const fetchMock = require("jest-fetch-mock");

// Setup DOM for testing
const dom = new JSDOM(`
  <div class="search">
    <input type="text" />
    <button>Search</button>
  </div>
  <div class="weather" style="display: none;">
    <span class="city"></span>
    <span class="temp"></span>
    <span class="humidity"></span>
    <span class="wind"></span>
    <img class="weather-icon" />
  </div>
  <div class="error" style="display: none;"></div>
`);
global.document = dom.window.document;
global.fetch = fetchMock;

// Import the function to be tested
const { checkWeather } = require('./app'); // assuming your functions are exported in app.js

describe("checkWeather function", () => {
  beforeEach(() => {
    fetch.resetMocks(); // reset fetch mocks before each test
  });

  test("should display weather data for a valid city", async () => {
    // Mock API response
    fetch.mockResponseOnce(
      JSON.stringify({
        name: "Nairobi",
        main: { temp: 25, humidity: 60 },
        wind: { speed: 5 },
        weather: [{ main: "Clear" }],
      })
    );

    // Call the function with a city name
    await checkWeather("Nairobi");

    // Check if DOM elements are updated
    expect(document.querySelector(".city").textContent).toBe("Nairobi");
    expect(document.querySelector(".temp").textContent).toBe("25°C");
    expect(document.querySelector(".humidity").textContent).toBe("60%");
    expect(document.querySelector(".wind").textContent).toBe("5 km/h");
    expect(document.querySelector(".weather-icon").src).toContain("clear.png");
    expect(document.querySelector(".weather").style.display).toBe("block");
  });

  test("should handle city not found error", async () => {
    // Mock API response for 404 error
    fetch.mockResponseOnce(
      JSON.stringify({ message: "city not found" }), { status: 404 }
    );

    // Call the function with an invalid city name
    await checkWeather("InvalidCity");

    // Check if error message is displayed
    expect(document.querySelector(".error").style.display).toBe("block");
    expect(document.querySelector(".weather").style.display).toBe("none");
  });
});

