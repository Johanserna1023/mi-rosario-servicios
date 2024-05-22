const { Order, conn } = require('../../src/db.js');
const chai = require('chai');



const assert = chai.assert;

describe('Order Model', () => {
    it('Deberia dejar dejar enviar el pedido con todos los campos llenos.', () => {

       const name_client = "jhoalvi pereira"
        const email = "jhoalvipereira@gmail.com"
       const cellphone = "3246132650"
       const direction = "vereda bojaca"
       const dessert = "Gelatina"
       const instructions = "leche y crema"

        const order = new Order({      name_client,
            email,
            cellphone,
            direction,
            dessert,
            instructions,});

        assert.equal(order.name_client, name_client);
        assert.equal(order.email, email);
        assert.equal(order.cellphone, cellphone);
        assert.equal(order.direction, direction);
        assert.equal(order.dessert, dessert);
        assert.equal(order.instructions, instructions);

    });
});