import { OWAPI } from "./OpenWeatherAPI";

// Que la respuesta traiga OK las Coordenadas
test("OWAPI Tucuman current",() => {
  OWAPI.current("Tucuman")
    .then(function(value) {
        expect(value.coord).toStrictEqual({"lon":-65.2226,"lat":-26.8241});
      }, function(reason) {
        console.log(reason);
      });;
});
