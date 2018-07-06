import axios from 'axios';

const API_KEY = 'af5323859b79c52e2b7a7492e7523e0e';
// const ROOT_URL = `https://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather (city){

    const url = `${ROOT_URL}&q=${city},us`;
   const request = axios.get(url);

   // A promise does not contain the actual data.
    return {
        type: FETCH_WEATHER,
        payload:request // return promise as paylos
    };
}

// A redux-promise stops the actions of payload is a promise
// Once the promise is finished it dispatched the unwrapping the promise and gets the data waits untill the promise resolved and then
// the data is sent to the reducer. It makes sure that reducer
// has the data to work with and return.
