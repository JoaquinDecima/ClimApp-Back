import {DARAPI} from '../apis/datosARAPI';
import {logger} from './logger';

export async function getCoordenadas(city) {
	try {
		logger.info(`GEOTools - ${city}`);
		const value = await DARAPI.provincia(city);
		const coordenadas = value.provincias[0];
		logger.info(`GEOTools - ${city} - ${value} - ${coordenadas}`);
		return(coordenadas.centroide);
	} catch (error) {
		logger.error(`GEOTools - ${error}`);
		return (error);
	}

}

