import { OWAPI } from "../apis/OpenWeatherAPI";

export module OWTools{

  export function current(city) {
    var fcity = city.replace(" ","%20");
    console.log(fcity);
    return(OWAPI.current(fcity));
  }

}
