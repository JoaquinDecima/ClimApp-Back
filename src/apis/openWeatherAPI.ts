import axios from 'axios';
import 'dotenv/config';

const server = 'https://api.openweathermap.org/data/2.5/';
const key = process.env.OW_KEY;

export async function currentapi(city) {
	const resposne = await axios.get(`${server}weather?q=${city}&appid=${key}&units=metric&lang=es`);
	return resposne.data;
}

export async function nextdaysapi(lat, lon){
	const resposne = await axios.get(`${server}onecall?lat=${lat}&lon=${lon}&appid=${key}&exclude=current,minutely,hourly&units=metric&lang=es`);
	return resposne.data;
}
