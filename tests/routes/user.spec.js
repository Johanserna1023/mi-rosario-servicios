/* eslint-disable import/no-extraneous-dependencies */
const app = require('../../src/app.js');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);


const expect = chai.expect;

describe('Login Route', () => {
    it('Deberia logear un usuario con los datos correctos', (done) => {
        const user = {
            username: 'jhoalvi',
            password: 'angriboy123',
        };

        chai.request(app)
            .post('/api/login')
            .send(user)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message').equals('Haz ingresado');
                done();
            });
    });
});
