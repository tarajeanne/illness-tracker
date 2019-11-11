const app = require('../src/app');
describe('server response with 200',()=>{
  it('resonse with a 200 code',()=>{
    return supertest(app).get('/').expect(200);
  });
});