import compression from 'compression';
import cors from 'cors';
import express from 'express';
import currentRouter from './routes/currentRouter';
import forecastRouter from './routes/forecastRouter';
import locationRouter from './routes/locationRouter';
import {getIP} from './tools/ipTools';

const port = process.env.PORT || 3030;
const app = express();
const corsOptions = {
	origin: ['https://joaquindecima.github.io', 'http://localhost:3000'],
	optionsSuccessStatus: 200
};

// Config APP express
app.use(compression());
app.use(cors(corsOptions));
app.use(express.json());
app.set('trust proxy', true);

app.use('/api/location/', locationRouter);
app.use('/api/forecast/', forecastRouter);
app.use('/api/current/', currentRouter);

// Solo retorna 200 si esta funcionando el servicio
app.get('/api/', (request, response) => {
	const ip = getIP(request);
	response.send(`¡Creado por Joaquin (Pato) Decima! Conectado desde la IP:${ip}`);
});

// Se inician servicio de API
export const server = app.listen(port, () => {
	console.log(`Ejecutado en http://localhost:${port}/api/`);
});
