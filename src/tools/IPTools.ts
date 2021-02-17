import {Request} from "express";
import { IPAPI } from "./../apis/IPAPI";

export module IPTools{

  // Obtengo IP de Request
  // ATTENCION: Solo funciona con IP Publica localhost da null
  export function getIP(req:Request) {
    var ip = req.connection.remoteAddress;
    console.log("IPTools", ip);
    return(ip.replace(/^.*:/, ''));
  }

  export function getGeoData(req:Request) {
    var ip = this.getIP(req);
    var city = IPAPI.get(ip.toString());
    console.log("IPTools", city);
    return(city);
  }

}
