import axios from 'axios';
import { getValue } from '../options/storage.js';


/*
We get weather from the OpenWeather service for a given city and API token.
And then we return the received information.
*/
export const getWeather = async(city) => {
    const token = await getValue('token');
    const { data } = await axios.get('https://api.openweathermap.org/data/2.5/weather', {
        params: {
            q: city,
            appid: token,
            units: 'metric',
            lang: 'en'
        }
    });
    return data;
};