import {Request} from "express";

export module IPTools{

  // Obtengo IP de Request
  // ATTENCION: Solo funciona con IP Publica localhost da null
  export function getIP(req:Request) {
    var ip = req.header('x-forwarded-for') || req.connection.remoteAddress;
    return(ip.replace(/^.*:/, ''));
  }

}
