import {Request} from "express";
import { IPAPI } from "./../apis/IPAPI";

export module IPTools{

  // Obtengo IP de Request
  // ATTENCION: Solo funciona con IP Publica localhost da null
  export function getIP(req:Request) {
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    return(ip.replace(/^.*:/, ''));
  }

  export function getGeoData(req:Request) {
    var ip = this.getIP(req);
    return(IPAPI.get(ip.toString()));
  }

}
