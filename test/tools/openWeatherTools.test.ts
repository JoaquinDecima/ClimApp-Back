import {current, nextdays} from '../../src/tools/openWeatherTools';

test('OpenWeatherTools - Tucuman - nextdays',async () => {
	const data = await nextdays({'lon':-65.2226,'lat':-26.8241});
	expect(data.length).toBe(5);
	expect(typeof data[0].clouds).toBe('number');
	expect(typeof data[0].dt).toBe('number');
});

test('Prueba OWTools Current',async () => {
	const data = await current('Tucuman');
	expect(data.weather.length).toBe(1);
	expect(typeof data.dt).toBe('number');
	expect(typeof data.id).toBe('number');
	expect(typeof data.base).toBe('string');
	expect(typeof data.main.temp).toBe('number');
	expect(typeof data.main.pressure).toBe('number');
	expect(typeof data.main.humidity).toBe('number');
	expect(data.name).toBe('San Miguel de Tucumán');
});