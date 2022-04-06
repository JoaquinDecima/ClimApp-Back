import {Request} from 'express';
import {IPAPI} from '../apis/IPAPI';

export namespace IPTools{

  // Obtengo IP de Request
  // ATTENCION: Solo funciona con IP Publica localhost da null
  export function getIP(req:Request) {
  	const ip = req.connection.remoteAddress;
  	console.log('IPTools', ip);
  	return(ip.replace(/^.*:/, ''));
  }

  export function getGeoData(req:Request) {
  	const ip = this.getIP(req);
  	const city = IPAPI.get(ip.toString());
  	console.log('IPTools', city);
  	return(city);
  }

}
