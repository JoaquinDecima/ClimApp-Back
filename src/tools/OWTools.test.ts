import { OWTools } from './OWTools'

test('Prueba OWTools Next Days',() => {
  OWTools.nextdays({"lon":-65.2226,"lat":-26.8241})
    .then(res =>{
      expect(res.length).toBe(5);
    });
});

test('Prueba OWTools Current',() => {
  OWTools.current("Tucuman")
    .then(res =>{
      expect(res.weather.length).toBe(1);
    });
});
