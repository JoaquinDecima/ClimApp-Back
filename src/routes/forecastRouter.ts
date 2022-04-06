import {Router} from 'express';
import {getGeoData} from '../tools/ipTools';
import {getCoordenadas} from '../tools/geoTools';
import {logger} from '../tools/logger';
import {nextdays} from '../tools/openWeatherTools';

const forecastRouter = Router();

forecastRouter.get('/', async (request,response) => {
	try {
		logger.info('GET /api/forecast');
		const coord = await getGeoData(request);
		const ret = await nextdays(coord);
		response.json(ret);
	} catch (e) {
		logger.error(`GET /api/forecast/- ${e}`);
		response.status(500).json({'error':e});
	}
});

forecastRouter.get('/:city', async (request,response) => {
	try {
		logger.info(`GET /api/forecast/${request.params.city}`);
		const coord = await getCoordenadas(request.params.city);
		const ret = await nextdays(coord);
		response.json(ret);
	} catch (e) {
		logger.error(`GET /api/forecast/${request.params.city} - ${e}`);
		response.status(500).json({'error':e});
	}
});

export default forecastRouter;