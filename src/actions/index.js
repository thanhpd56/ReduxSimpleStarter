const API_KEY = 'b6e639e3a055da47a64572ba3c22b5be';
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather() {
    return {
        type: FETCH_WEATHER
    }
}