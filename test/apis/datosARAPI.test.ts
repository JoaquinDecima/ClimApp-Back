import {DARAPI} from '../../src/apis/datosARAPI';

test('DARAPI - GET Córdoba', async() => {
	const prov = await DARAPI.provincia('cordoba');
	expect(prov.provincias[0].nombre).toBe('Córdoba');
	expect(prov.cantidad).toBe(1);
});

test('DARAPI - GET Tucumán - Nombre', async() => {
	const prov = await DARAPI.provincia('tucuman');
	expect(prov.provincias[0].nombre).toBe('Tucumán');
	expect(prov.cantidad).toBe(1);
});