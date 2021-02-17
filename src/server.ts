import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import { GEOTools } from "./tools/GEOTools";
import { IPTools } from "./tools/IPTools";
import { OWTools } from "./tools/OWTools";

const cors = require("cors");
const express = require("express");
const port = process.env.PORT || 3030;
const app = express();

// Config APP express
var corsOptions = {
  origin: ['https://joaquindecima.github.io', 'http://localhost:3000'],
  optionsSuccessStatus: 200
}
app.use(cors(corsOptions))
app.use(bodyParser.json());
app.set('trust proxy', true);

// ATTENCION: Solo funciona con IP Publica localhost da null la IP
// V1 Solo retorna 200 si esta funcionando el servicio
app.get('/v1/', (request, response) => {
  var ip = IPTools.getIP(request);
  response.send('¡Creado por Joaquin (Pato) Decima! Conectado desde la IP:'.concat(ip.toString()));
});

// ATTENCION: En caso de no tener IP Publica (Pruebas en localhost) Retorna Undefine
// Retorna la Ciudad desde donde se consulta
app.get('/v1/location/', (request, response) => {
  IPTools.getGeoData(request)
    .then(function(value) {
      response.json({"city":value.city});
      }, function(reason) {
        response.status(500).json({"error":reason}); // Error!
      });
});

app.get('/v1/current/', async (request,response) => {
  var city = await IPTools.getGeoData(request)
    .then(function(value) {
      return value.city;
    }, function(reason) {
      response.status(500).json({"error":reason}); // Error!
    });
  console.log(city);
  OWTools.current(city)
    .then(function(value) {
      response.json(value);
    }, function(reason) {
      response.status(500).json({"error":reason}); // Error!
    });
});

app.get('/v1/current/:city', (request,response) => {
  OWTools.current(request.params.city)
    .then(function(value) {
      response.json(value);
    }, function(reason) {
      response.status(500).json({"error":reason}); // Error!
    });
});

app.get('/v1/forecast/', async (request,response) => {
  var coord = await IPTools.getGeoData(request)
    .then(function(value) {
      return {
        "lat":value.lat,
        "lon":value.lon,
      };
    }, function(reason) {
      response.status(500).json({"error":reason}); // Error!
    });
  OWTools.nextdays(coord)
    .then(function(value) {
      response.json(value);
    }, function(reason) {
      response.status(500).json({"error":reason}); // Error!
    });
});

app.get('/v1/forecast/:city', async (request,response) => {
  var coord = await GEOTools.getCoordenadas(request.params.city)
    .then(function(value) {
      return value;
    }, function(reason) {
      response.status(500).json({"error":reason}); // Error!
    });
  OWTools.nextdays(coord)
    .then(function(value) {
      response.json(value);
    }, function(reason) {
      response.status(500).json({"error":reason}); // Error!
    });
});

// Se inician servicio de API
export const server = app.listen(port, () => {
  console.log(('Ejecutado en http://localhost:'.concat(port.toString())).concat('/v1/'))
});
