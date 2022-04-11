import {IpAPI} from '../../src/apis/ipAPI';

test('IpAPI - Buenos Aires', async() => {
	const data = await IpAPI.get('186.111.141.96');
	expect('Buenos Aires').toBe(data.city);
});

test('IpAPI - Toronto', async() => {
	const data = await IpAPI.get('172.67.156.222');
	expect('Toronto').toBe(data.city);
});