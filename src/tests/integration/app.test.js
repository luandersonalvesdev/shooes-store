const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../../app');

chai.use(chaiHttp);

const { expect } = chai;

describe('Test APP.', function () {
  describe('Test default route: "/".', function () {
    it('If have default response.', async function () {
      const res = await chai.request(app).get('/');

      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.deep.equal({ message: 'server are healthy' });
    });
  });
  describe('Test Not Found route: "/z".', function () {
    it('If have default response.', async function () {
      const res = await chai.request(app).get('/z');

      expect(res.status).to.be.equal(404);
      expect(res.body).to.be.deep.equal({ message: 'not found' });
    });
  });
});
