import axios from 'axios';

const OPENWEATHER_API_KEY = process.env.OPENWEATHER_API_KEY;

console.log("WR__ 987 actions/index.js OPENWEATHER_API_KEY: ", OPENWEATHER_API_KEY);

// http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=xml&appid=b1b15e88fa797225412429c1c50c122a1
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${OPENWEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

const city = 'Cambridge';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us&units=imperial`;

  // returns a PROMISE
  const response = axios.get(url);

  console.log("WR__ axios.get(url) response: ", response);

  return {
    type: FETCH_WEATHER,
    // Here is that returned PROMISE:
    payload: response
  }
}
