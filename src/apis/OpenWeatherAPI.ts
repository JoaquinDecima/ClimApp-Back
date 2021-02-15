import axios from 'axios';

const server = 'https://api.openweathermap.org/data/2.5/';
const key = '8564d152e5793c5a7fe47abde047276d'

export const OWAPI = {
  current: city => axios.get(`${server}weather?q=${city}&appid=${key}&units=metric&lang=es`)
                    .then(response => response.data),
  nextdays: (lat, lon) => axios.get(`${server}onecall?lat=${lat}&lon=${lon}&appid=${key}&exclude=current,minutely,hourly&units=metric&lang=es`)
                    .then(response => response.data)
};
