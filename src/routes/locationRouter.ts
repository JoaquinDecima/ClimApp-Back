import {Router} from 'express';
import {getGeoData} from '../tools/ipTools';
import {logger} from '../tools/logger';

const locationRouter = Router();

// ATTENCION: En caso de no tener IP Publica (Pruebas en localhost) Retorna Undefine
// Retorna la Ciudad desde donde se consulta
locationRouter.get('/', async (request, response) => {
	try {
		logger.info('GET /api/location');
		const value = await getGeoData(request);
		response.json({'city':value.city});
	}catch (e) {
		logger.error(`GET /api/location - ${e}`);
		response.status(500).json({'error':e});
	}
});

export default locationRouter;