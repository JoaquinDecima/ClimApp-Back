import {Request} from "express";
import { IPAPI } from "./../apis/IPAPI";

export module IPTools{

  // Obtengo IP de Request
  // ATTENCION: Solo funciona con IP Publica localhost da null
  export function getIP(req:Request) {
    var ip = req.connection.remoteAddress;
    return(ip.replace(/^.*:/, ''));
  }

  export async function getGeoData(req:Request) {
    var ip = this.getIP(req);
    var city = await IPAPI.get(ip.toString());
    return(city);
  }

}
