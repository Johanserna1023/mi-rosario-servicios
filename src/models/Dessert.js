const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("dessert", {
    name_dessert: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
    stock: {
      type: DataTypes.INTEGER,
    },
    price: {
      type: DataTypes.FLOAT,
    },
    image: {
        type: DataTypes.TEXT,
    },
    createdInDb: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  });
};
