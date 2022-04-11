import {server} from '../src/server';
import supertest from 'supertest';

const req = supertest('http://localhost:3030');
const sv = server;

test('Server - / - 200 ',() => {
	req.get('/').expect(200);
});

test('Server - /api/ - 200',() => {
	req.get('/api/').expect(200);
});

sv.close();