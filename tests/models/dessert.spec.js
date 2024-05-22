const { Dessert, conn } = require("../../src/db.js");
const chai = require("chai");

const assert = chai.assert;

describe("Dessert Model", () => {
  it("Deberia dejar dejar crear un postre.", () => {
    const name_dessert = "Pastel";
    const description = "paste de crema con fresas";
    const stock = 9;
    const price = 10.5;
    const image = "https://i.ytimg.com/vi/xEh8_5tcC14/maxresdefault.jpg";

    const dessert = new Dessert({
      name_dessert,
      description,
      stock,
      price,
      image,
    });

    assert.equal(dessert.name_dessert, name_dessert);
    assert.equal(dessert.description, description);
    assert.equal(dessert.stock, stock);
    assert.equal(dessert.price, price);
    assert.equal(dessert.image, image);
  });
});
