import * as bodyParser from "body-parser";
import {Request, Response} from "express";


const cors = require("cors");
const express = require("express");
const port = 3030;
const app = express();

app.use(cors())
app.use(bodyParser.json());



app.get('/', (request, response) => {
  response.send('¡Creado por Joaquin (Pato) Decima!');
});

const server = app.listen(port, () => {
  console.log('Ejecutado en el puerto '.concat(port.toString()))
});

module.exports = server;
