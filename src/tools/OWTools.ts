import { OWAPI } from "../apis/OpenWeatherAPI";

export module OWTools{

  export function current(city) {
    var ret = OWAPI.current(city.replace(" ","%20"));
    console.log("OWTools:", ret);
    return(ret);
  }

  export function nextdays(coord) {
    var ret = OWAPI.nextdays(coord.lat,coord.lon)
      .then(function(value) {
        return(value.daily.slice(1,6));
      }, function(reason) {
        console.log("OWTools:", "ERROR in nextdays");
        return(reason);
      });
    return(ret);
  }

}
