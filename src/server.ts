import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as express from 'express';

import {AppRoutes} from "./routes.ts";

const port = 3030;
const app = express;

// Se Registran todas las Rutas
AppRoutes.forEach(route => {
  app[route.method](route.path, (request, response, next) => {
    route.action(request, response)
      .then(() => next)
      .catch(err => next(err));
  });
});

app.get('/', (request, response) => {
  response.send('¡Creado por Joaquin (Pato) Decima!');
});

app.listen(port, () => {
  console.log('Ejecutado en el puerto ${port}')
});
