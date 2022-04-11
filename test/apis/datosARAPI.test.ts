import {DARAPI} from '../../src/apis/datosARAPI';

test('DARAPI - GET Córdoba - Nombre', async() => {
	const prov = await DARAPI.provincia('cordoba');
	expect('Córdoba').toBe(prov.provincias[0].nombre);
});

test('DARAPI - GET Córdoba - Cantidad', async() => {
	const prov = await DARAPI.provincia('cordoba');
	expect(1).toBe(prov.cantidad);
});

test('DARAPI - GET Tucumán - Nombre', async() => {
	const prov = await DARAPI.provincia('tucuman');
	expect('Tucumán').toBe(prov.provincias[0].nombre);
});

test('DARAPI - GET Tucumán - Cantidad', async() => {
	const prov = await DARAPI.provincia('tucuman');
	expect(1).toBe(prov.cantidad);
});