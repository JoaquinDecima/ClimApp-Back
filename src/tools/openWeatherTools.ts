import {currentapi, nextdaysapi} from '../apis/openWeatherAPI';
import {logger} from './logger';

export async function current(city) {
	const ret = await currentapi(city.replace(' ', '%20'));
	logger.info(`openWeatherTools - ${ret}`);
	return(ret);
}

export async function nextdays(coord) {
	const ret = await nextdaysapi(coord.lat, coord.lon);
	logger.info(`openWeatherTools - ${JSON.stringify(ret)}`);
	return(ret.daily.slice(1,6));
}
