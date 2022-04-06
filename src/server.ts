import express from 'express';
import cors from 'cors';
import {getGeoData, getIP} from './tools/ipTools';
import locationRouter from './routes/locationRouter';
import forecastRouter from './routes/forecastRouter';
import {current} from './tools/openWeatherTools';

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
app.use('/api/forecast/', forecastRouter);

// Solo retorna 200 si esta funcionando el servicio
app.get('/api/', (request, response) => {
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
	current(city)
		.then(function(value) {
			response.json(value);
		}, function(reason) {
			response.status(500).json({'error':reason}); // Error!
		});
});

app.get('/v1/current/:city', (request,response) => {
	console.log('SERVER:', '/v1/current/:city', request.params.city);
	current(request.params.city)
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
