import axios from 'axios';

const server = 'https://apis.datos.gob.ar/georef/api/provincias';

export const DARAPI = {
	provincia: city => axios.get(`${server}?nombre=${city}`)
		.then(response => response.data)
};
