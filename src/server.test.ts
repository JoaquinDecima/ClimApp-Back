import { server } from "./server";

const request = require('supertest');
const req = request('http://localhost:3030');
var sv


describe('Test Server',function() {
  sv = server
})

test("Prueba API ON",() => {
  req.get('/').expect(200);
});

//req.get('/').expect(200, function(err){
//  console.log(err);
//});

//request(server).get("/").expect(200).end(function(err, res) {
//  if (err) throw err;
//});

sv.close();
