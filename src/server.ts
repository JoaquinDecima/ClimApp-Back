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

// ATTENCION: Solo funciona con IP Publica localhost da null
app.get('/', (request, response) => {
  var ip = IPTools.getIP(request);
  response.send('¡Creado por Joaquin (Pato) Decima!'.concat(ip.toString()));
});

const server = app.listen(port, () => {
  console.log('Ejecutado en http://localhost:'.concat(port.toString()))
});

module.exports = server;
