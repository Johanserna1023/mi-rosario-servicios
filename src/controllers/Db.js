const { Dessert } = require("../db");

/**************Obtener información de la base de datos*************/

const getDbInfo = async () => {
  try {
    return (
      await Dessert.findAll()
    ).map((elem) => {
      return {
        id: elem.id,
        name_dessert: elem.name_dessert,
        description: elem.description,
        stock: elem.stock,
        price: elem.price,
        image: elem.image,
        createdInDb: elem.createdInDb,
       
      };
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getDbInfo };