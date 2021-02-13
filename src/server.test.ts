import { server } from "./server";

const request = require('supertest');
const req = request('http://localhost:3030');
var sv


describe('Test Server',function() {
  sv = server
})

// Verifico que la API Inicie OK
test("Prueba API ON",() => {
  req.get('/').expect(200);
});

//Verifico que V1 Este ON
test("Prueba API ON",() => {
  req.get('/v1/').expect(200);
});

sv.close();
