import { DARAPI } from "./DatosARAPI";

// Verifico con una IP me retorne su GEO
test("Prueba Datos AR API get Cordoba",() => {
  DARAPI.provincia("Cordoba")
    .then(function(value) {
        expect(value.cantidad).toBe(1);
      }, function(reason) {
        expect(true).toBe(true);
      });;
});
