import {Router} from 'express';
import {getGeoData} from '../tools/ipTools';
import {current} from '../tools/openWeatherTools';
import {logger} from '../tools/logger';

const currentRouter = Router();

currentRouter.get('/', async (request,response) => {
	try {
		logger.info('GET /api/current/');
		const geoData = await getGeoData(request);
		const ret = await current(geoData.city);
		response.json(ret);
	} catch (e) {
		logger.error(`GET /api/current/ - ${e}`);
		response.status(500).json({'error':e});
	}
});

currentRouter.get('/:city', async (request,response) => {
	try {
		logger.info(`GET /api/current/${request.params.city}`);
		const ret = await current(request.params.city);
		response.json(ret);
	} catch (e) {
		logger.error(`GET /api/current/${request.params.city} - ${e}`);
		response.status(500).json({'error':e});
	}
});

export default currentRouter;