const chai = require('chai');
const chaiHttp = require('chai-http');
const sinon = require('sinon');
const app = require('../../app');
const connection = require('../../db/connection');
const employessMock = require('../mock/employee.json');

chai.use(chaiHttp);

const { expect } = chai;

const newEmployee = {
  firstName: 'New',
  lastName: 'Employee',
};

describe('Test EMPLOYEE.', function () {
  afterEach(function () {
    sinon.restore();
  });
  describe('Test default route: "/".', function () {
    it('Should return all employees.', async function () {
      sinon.stub(connection, 'execute').resolves([employessMock]);
      const res = await chai.request(app).get('/employee');

      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.deep.equal(employessMock);
    });

    it('Should add a new employee.', async function () {
      sinon.stub(connection, 'execute').resolves([{ insertId: '3' }]);
      const res = await chai.request(app).post('/employee').send(newEmployee);

      expect(res.status).to.be.equal(201);
      expect(res.body).to.be.deep.equal({ message: 'New employee has been added with id 3.' });
    });

    it('Should return employee by id.', async function () {
      sinon.stub(connection, 'execute').resolves([employessMock[0]]);
      const res = await chai.request(app).get('/employee/1');

      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.deep.equal(employessMock[0]);
    });

    it('Should update a employee.', async function () {
      sinon.stub(connection, 'execute').resolves([]);
      const res = await chai.request(app).put('/employee/2').send(newEmployee);

      expect(res.status).to.be.equal(200);
      expect(res.body).to.be.deep.equal({ message: 'Employee has been updated.' });
    });

    it('Should delete employee.', async function () {
      sinon.stub(connection, 'execute').resolves([]);
      const res = await chai.request(app).delete('/employee/2');

      expect(res.status).to.be.equal(204);
      expect(res.body).to.be.deep.equal({});
    });
  });
});
