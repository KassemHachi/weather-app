import { City } from '@/types/city';
import axios from 'axios';

const API_KEY = process.env.NEXT_PUBLIC_WEATHER_API_KEY;
const BASE_URL = 'https://api.weatherapi.com/v1';

export const fetchWeather = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/current.json?key=${API_KEY}&q=${city}`);
  try {
    const data = response.data;

    return data;
  } catch (e) {
    return null;
  }
};


export const fetchWeatherFuture = async (city: string) => {
  const response = await axios.get(`${BASE_URL}/forecast.json?key=${API_KEY}&q=${city}&days=7`);
  try {
    const data = response.data;
    return { forecast: data?.forecast?.forecastday, location: data?.location }
  } catch (err) {
    return null;
  }
};