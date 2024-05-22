const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("user", {
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
    },

    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    rol: {
      type: DataTypes.ENUM("Admin", "Contador"),
      defaultValue: "Admin",
    },

    image: {
      type: DataTypes.TEXT,
      defaultValue:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",
    },
  });
};
