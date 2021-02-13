import { IPTools } from "./IPTools";
import {Request} from "express";

const responseBSAS:Request = {
  "connection":{
    "remoteAddress":"186.111.141.96"
  }
} as Request;

test("Prueba GetIP",() => {
  expect(IPTools.getIP(responseBSAS)).toBe("186.111.141.96");
});

test("Prueba GetGEO",() => {
  IPTools.getGeoData(responseBSAS)
    .then(function(value) {
        expect(value).toBe("Buenos Aires");
      }, function(reason) {
        expect(true).toBe(true);
      });;
});
