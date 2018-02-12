import axios from 'axios';
const API_KEY = 'b6e639e3a055da47a64572ba3c22b5be';
export const FETCH_WEATHER = 'FETCH_WEATHER';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log(request);
    return {
        type: FETCH_WEATHER,
        payload: request

    }
}