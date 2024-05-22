/* eslint-disable import/no-extraneous-dependencies */
const app = require('../../src/app.js');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);


const expect = chai.expect;

describe('Order Route', () => {
    it('Deberia enviar la solicitud de pedido llenando todos los campos', (done) => {
        const order = {
            name_client: "jhoalvi pereira",
            email: "jhoalvipereira@gmail.com",
            cellphone: "3246132650",
            direction: "vereda bojaca",
            dessert: "Gelatina",
            instructions: "leche y crema",
            
        };

        chai.request(app)
            .post('/api/order')
            .send(order)
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.body).to.have.property('message').equals('Pedido enviado');
                done();
            });
    });
});