import {currentapi} from '../../src/apis/openWeatherAPI';

test('OpenWeatherAPI - Tucuman current',async () => {
	const data = await currentapi('Tucuman');
	expect(data.coord).toStrictEqual({'lon':-65.2226,'lat':-26.8241});
	expect(data.name).toBe('San Miguel de Tucumán');
	expect(data.sys.country).toBe('AR');
});

test('OpenWeatherAPI - Cordoba current',async () => {
	const data = await currentapi('Cordoba');
	expect(data.coord).toStrictEqual({'lon':-64.1811,'lat':-31.4135});
	expect(data.name).toBe('Córdoba');
	expect(data.sys.country).toBe('AR');
});