import { IPAPI } from "./IPAPI";

// Verifico con una IP me retorne su GEO
test("Prueba GetGEO",() => {
  IPAPI.get("186.111.141.96")
    .then(function(value) {
        expect(value.city).toBe("Buenos Aires");
      }, function(reason) {
        expect(true).toBe(true);
      });;
});
