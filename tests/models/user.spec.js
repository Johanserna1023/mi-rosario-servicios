const { User, conn } = require('../../src/db.js');
const chai = require('chai');



const assert = chai.assert;

describe('User Model', () => {
    it('Deberia dejar iniciar sesion con las credenciales correctas', () => {
        const username = "jhoalvi";
        const password = "angriboy123";

        const user = new User({username, password});

        assert.equal(user.username, username);
        assert.equal(user.password, password);

    });
});



