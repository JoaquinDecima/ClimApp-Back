import express from 'express';
import cors from 'cors';
import {getCoordenadas} from './tools/geoTools';
import {getGeoData, getIP} from './tools/ipTools';
import {OWTools} from './tools/OWTools';
import locationRouter from './routes/locationRouter';

const port = process.env.PORT || 3030;
const app = express();
const corsOptions = {
	origin: ['https://joaquindecima.github.io', 'http://localhost:3000'],
	optionsSuccessStatus: 200
};

// Config APP express
app.use(cors(corsOptions));
app.use(express.json());
app.set('trust proxy', true);

app.use('/api/location/', locationRouter);

// ATTENCION: Solo funciona con IP Publica localhost da null la IP
// V1 Solo retorna 200 si esta funcionando el servicio
app.get('/v1/', (request, response) => {
	const ip = getIP(request);
	response.send('¡Creado por Joaquin (Pato) Decima! Conectado desde la IP:'.concat(ip.toString()));
});

app.get('/v1/current/', async (request,response) => {
	const city = await getGeoData(request)
		.then(function(value) {
			return value.city;
		}, function(reason) {
			response.status(500).json({'error':reason}); // Error!
		});
	console.log(city);
	OWTools.current(city)
		.then(function(value) {
			response.json(value);
		}, function(reason) {
			response.status(500).json({'error':reason}); // Error!
		});
});

app.get('/v1/current/:city', (request,response) => {
	console.log('SERVER:', '/v1/current/:city', request.params.city);
	OWTools.current(request.params.city)
		.then(function(value) {
			response.json(value);
		}, function(reason) {
			response.status(500).json({'error':reason}); // Error!
		});
});

app.get('/v1/forecast/', async (request,response) => {
	const coord = await getGeoData(request)
		.then(function(value) {
			return {
				'lat':value.lat,
				'lon':value.lon,
			};
		}, function(reason) {
			response.status(500).json({'error':reason}); // Error!
		});
	console.log('SERVER:', '/v1/forecast', coord);
	OWTools.nextdays(coord)
		.then(function(value) {
			response.json(value);
		}, function(reason) {
			response.status(500).json({'error':reason}); // Error!
		});
});

app.get('/v1/forecast/:city', async (request,response) => {
	console.log('SERVER:', '/v1/forecast/:city', request.params.city);
	const coord = await getCoordenadas(request.params.city)
		.then(function(value) {
			return value;
		}, function(reason) {
			response.status(500).json({'error':reason}); // Error!
		});
	console.log('SERVER:', '/v1/forecast/:city', coord);
	OWTools.nextdays(coord)
		.then(function(value) {
			response.json(value);
		}, function(reason) {
			response.status(500).json({'error':reason}); // Error!
		});
});

// Se inician servicio de API
export const server = app.listen(port, () => {
	console.log(('Ejecutado en http://localhost:'.concat(port.toString())).concat('/v1/'));
});
