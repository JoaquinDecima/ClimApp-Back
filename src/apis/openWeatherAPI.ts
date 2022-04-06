import axios from 'axios';

const server = 'https://api.openweathermap.org/data/2.5/';
const key = '8564d152e5793c5a7fe47abde047276d';

export async function currentapi(city) {
	const resposne = await axios.get(`${server}weather?q=${city}&appid=${key}&units=metric&lang=es`);
	return resposne.data;
}

export async function nextdaysapi(lat, lon){
	const resposne = await axios.get(`${server}onecall?lat=${lat}&lon=${lon}&appid=${key}&exclude=current,minutely,hourly&units=metric&lang=es`);
	return resposne.data;
}
