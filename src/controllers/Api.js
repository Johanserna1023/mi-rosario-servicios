const axios = require("axios");
require("dotenv").config();
const { Deserts } = require("../Utils/cardDeserts");


const getApiDessert = async () => {
  //obtiene los primeros 100 juegos
  try {
    const apiInfo = Deserts;

    const apiDesserts = await apiInfo.map((elem) => {
      return {
        id: elem.id,
        name_dessert: elem.name,
        category: elem.category,
        price: elem.price,
        description: elem.description,
        stock: elem.stock,
        image: elem.image,
      };
    });
    console.log(apiDesserts)
    return apiDesserts;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { getApiDessert};