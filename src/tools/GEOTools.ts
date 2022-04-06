import { DARAPI } from '../apis/DatosARAPI';

export namespace GEOTools{

  export async function getCoordenadas(city) {
  	try {
  		console.log('GEOTools', 'TRACE', city);
  		const value = await DARAPI.provincia(city);
  		console.log('GEOTools', 'TRACE', value);
  		const coordenadas = value.provincias[0];
  		console.log('GEOTools', 'TRACE', coordenadas);
  		return(coordenadas.centroide);
  	} catch (error) {
  		console.log('GEOTools', 'ERROR', error);
  		return (error);
  	}

  }

}
