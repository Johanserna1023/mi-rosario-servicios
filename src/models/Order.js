const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("order", {
    name_client: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cellphone: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    direction: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    dessert: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    instructions: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
  });
};
