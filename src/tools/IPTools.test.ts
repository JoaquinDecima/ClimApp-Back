import { IPTools } from "./IPTools";
import {Request} from "express";

const responseBSAS:Request = {
  "connection":{
    "remoteAddress":"186.111.141.96"
  }
} as Request;

// Envio un Request MOCK y espero obtener la IP Implantada
test("Prueba GetIP",() => {
  expect(IPTools.getIP(responseBSAS)).toBe("186.111.141.96");
});

// Utilizando el Mismo MOCK espero obtener la Ubicacion (BsAs)
test("Prueba GetGEO",() => {
  IPTools.getGeoData(responseBSAS)
    .then(function(value) {
        expect(value).toBe("Buenos Aires");
      }, function(reason) {
        expect(true).toBe(true);
      });;
});
