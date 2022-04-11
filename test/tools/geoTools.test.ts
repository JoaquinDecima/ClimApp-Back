import {getCoordenadas} from '../../src/tools/geoTools';

test('geoTools - getCoordenadas - Tucuman',async () => {
	const data = await getCoordenadas('Tucuman');
	expect(data).toStrictEqual({'lon':-65.3647579441481,'lat':-26.9478001830786});
});

test('geoTools - getCoordenadas - Cordoba',async () => {
	const data = await getCoordenadas('Cordoba');
	expect(data).toStrictEqual({'lon':-63.8017532741662,'lat':-32.142932663607});
});