// Projeto simples do clima de tempo  localização   Ceará
// https://www.weatherapi.com/docs/rest-api-reference/v

import axios from "axios";

interface WeatherData {
  name: string;
  main: {
    temp: number;
    feels_like: number;
    humidity: number;
  };
  weather: {
    description: string;
    icon: string;
  }[];
}

async function getWeather(city: string): Promise<WeatherData> {
  const apiKey = "YOUR_API_KEY_HERE";
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await axios.get(url);
  return response.data;
}

async function displayWeather(city: string = "Sao Paulo"): Promise<void> {
  try {
    const weatherData = await getWeather(city);
    const temperature = weatherData.main.temp;
    const feelsLike = weatherData.main.feels_like;
    const humidity = weatherData.main.humidity;
    const description = weatherData.weather[0].description;
    const icon = weatherData.weather[0].icon;

    console.log(`Cidade: ${weatherData.name}`);
    console.log(`Temperatura: ${temperature}°C`);
    console.log(`Sensação térmica: ${feelsLike}°C`);
    console.log(`Umidade: ${humidity}%`);
    console.log(`Descrição: ${description}`);
    console.log(`Ícone: https://openweathermap.org/img/w/${icon}.png`);
  } catch (error) {
    console.error(error);
  }
}

// Exemplo com a localização do Brasil (São Paulo)
displayWeather("Ceará");
