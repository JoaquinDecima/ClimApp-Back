import { GEOTools } from "./GEOTools";

// Verifico la obtencion de coordenadas con una provincia
test('Pruebas GEOTools obtener coordenadas', async () => {
  var coordenadas =  await GEOTools.getCoordenadas("Cordoba");
  expect(coordenadas).toStrictEqual({"lat":-32.142932663607,"lon":-63.8017532741662});
});
