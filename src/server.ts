import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import { IPTools } from "./tools/IPTools";

const cors = require("cors");
const express = require("express");
const port = 3030;
const app = express();

app.use(cors())
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
      response.send('¡Creado por Joaquin (Pato) Decima! Conectado desde:'.concat(value.city));
      }, function(reason) {
        response.send(reason); // Error!
      });


});

const server = app.listen(port, () => {
  console.log(('Ejecutado en http://localhost:'.concat(port.toString())).concat('/v1/'))
});

module.exports = server;
