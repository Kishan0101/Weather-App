# Weather Now

Weather Now is a simple, user-friendly web application built with React that allows users to quickly check the current weather conditions for any city. Designed with outdoor enthusiasts in mind, this application is perfect for anyone needing quick access to weather updates.

## Features
- **Live Weather Updates**: Get real-time weather information for any city worldwide.
- **Simple and Intuitive UI**: Designed for quick access, with a clean and modern interface.
- **Interactive Elements**: Button hover effects, error handling, and responsive design for all devices.
- **Built with React**: Utilizes React's built-in state management, and Axios for data fetching.

## User Persona
- **Name**: Jamie
- **Occupation**: Outdoor Enthusiast
- **Need**: Quickly check the current weather conditions for any city

## Tech Stack
- **Framework**: [React](https://reactjs.org/) - Used for building the application's UI components.
- **Styling**: Plain CSS with interactive design elements and a beautiful background image.
- **Data Fetching**: [Open-Meteo API](https://open-meteo.com/) for weather data.
- **State Management**: React's built-in `useState` and `useEffect` hooks.

## Project Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/kishan0101/Weather-Aow.git
   cd weather-now


Here’s the additional information formatted in Markdown:

```markdown
## Install Dependencies

```bash
npm install
```

## Run the Application

```bash
npm start
```

The application will be accessible at `https://mdprw4.csb.app/` in your browser.

## Usage
1. Enter the name of a city in the input box.
2. Click the "Get Weather" button to fetch and display the current weather conditions.
3. If an error occurs (e.g., an invalid city name), an error message will appear.

## Components

### App.js
Main component handling city input, data fetching, and managing state. It communicates with two main sub-components:
- **CitySearch**: Input field for the city name.
- **WeatherCard**: Displays the fetched weather information.

### WeatherCard.js
Displays weather data for the searched city, including temperature, wind speed, and general conditions.

### CitySearch.js
Handles user input for city search, and triggers data fetching on button click.

## API
Weather Now uses the **Open-Meteo API** for fetching live weather data without requiring any authentication or registration.

### Example API Endpoint:
```bash
https://api.open-meteo.com/v1/forecast?latitude={latitude}&longitude={longitude}&current_weather=true
```

## CSS Styling
The application includes attractive and responsive CSS styling:
- Background image for a natural and appealing look.
- Hover effects for buttons and inputs.
- Semi-transparent weather cards for easy readability and visual separation from the background.
- Mobile-responsive design.

## Video
[screencast-mdprw4_csb_app-2024_11_10-01_21_31.webm](https://github.com/user-attachments/assets/42d210c3-8cd1-4c07-b247-b3b51bf1f533)



## Future Improvements
- **Add Forecast Data**: Extend the app to show multi-day weather forecasts.
- **Location-based Weather**: Use the browser’s geolocation to detect the user’s location and show local weather by default.
- **Enhanced Error Handling**: Show specific error messages for different error cases (e.g., network issues or invalid city names).

## License
This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
