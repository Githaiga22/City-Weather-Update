# City Weather Update

## Overview

City Weather Update is a simple web application that allows users to check the current weather conditions for any city. It fetches weather data from the OpenWeather API and displays relevant information such as temperature, humidity, wind speed, and weather conditions.

## Features

- **City Search**: Users can enter the name of a city to retrieve weather data.
- **Weather Details**: Displays the city name, temperature, humidity, and wind speed.
- **Weather Icons**: Shows corresponding weather icons based on the current weather conditions.
- **Error Handling**: Provides user-friendly error messages when the city is not found.

## Technologies Used

- **HTML**: For structuring the web page.
- **CSS**: For styling the application.
- **JavaScript**: For the dynamic functionality of the app.
- **Jest**: For testing the application’s functionality.
- **OpenWeather API**: To fetch real-time weather data.

## Getting Started

To get a local copy up and running, follow these simple steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/Githaiga22/city-weather-update.git
   cd city-weather-update

2. Install dependencies: Ensure you have Node.js and npm installed. Then run:
```bash
    npm install
```
3. Run the application: Open the index.html file in your web browser to view the app.

 ### Usage

1. Open the application in your browser.
2.  Type the name of a city in the search box.
3. Click the search button to fetch the weather data.
4. View the displayed weather information, including temperature, humidity, and wind speed.

### Testing

To run tests using Jest, follow these steps:

1. Ensure you have Jest installed:

```bash
npm install --save-dev jest
```
2. Install jest-fetch-mock:

Run the following command to install package:
```bash
npm install jsdom jest-fetch-mock --save-dev
```
3. Set up a test script in package.json:

Add the following to your package.json to enable running Jest tests with npm test:
```bash
{
  "scripts": {
    "test": "jest"
  }
}
```
Your full package.json will look like this:
```bash
{
  "devDependencies": {
    "jest": "^29.7.0"
  },
  "scripts": {
    "test": "jest"
  }
}
```
4. Install jsdom: Run the following command in your terminal:
```bash
npm install --save-dev jsdom
```
5. Run the tests:
```bash
npm test
```

### Future Improvements

- Add a feature to save favorite cities and quickly check their weather.
-  Implement a more advanced error handling mechanism for different error scenarios.
- Enhance the UI with more detailed weather forecasts.

### Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and create a pull request.
### License

This project is licensed under the MIT License - see the LICENSE file for details.

### Acknowledgments

- [OpenWeather](https://openweathermap.org/api) API for providing weather data.
- [Jest](https://jestjs.io/) for testing framework support.