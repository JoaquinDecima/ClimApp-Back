import {Request} from 'express';
import {IPAPI} from '../apis/IPAPI';
import {logger} from './logger';

// Obtengo IP de Request
// ATTENCION: Solo funciona con IP Publica localhost da null
export function getIP(req:Request) {
	const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
	logger.info(`IPTools - ${ip}`);
	return(ip.toString().replace(/^.*:/, ''));
}

export async function getGeoData(req:Request) {
	const ip = getIP(req);
	const city = await IPAPI.get(ip.toString());
	if (city.status === 'fail'){
		logger.error(`IPTools - ${city.message}`);
		throw new Error(city.message);
	}else{
		logger.info(`IPTools - ${JSON.stringify(city)}`);
	}
	return(city);
}
