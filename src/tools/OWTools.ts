import { OWAPI } from "../apis/OpenWeatherAPI";

export module OWTools{

  export function current(city) {
    var fcity = city.replace(" ","%20");
    return(OWAPI.current(fcity));
  }

  export function nextdays(coord) {
    var ret = OWAPI.nextdays(coord.lat,coord.lon)
      .then(function(value) {
        return(value.daily.slice(1,6));
      }, function(reason) {
        console.log(reason);
         // Error!
      });
    return(ret);
  }

}
