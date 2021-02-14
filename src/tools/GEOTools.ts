import { DARAPI } from "../apis/DatosARAPI";

export module GEOTools{

  export async function getCoordenadas(city) {
    try {
      var value = await DARAPI.provincia(city);
      var coordenadas = value.provincias[0];
      return(coordenadas.centroide);
    } catch (error) {
      return (error);
    }
    
  }

}
