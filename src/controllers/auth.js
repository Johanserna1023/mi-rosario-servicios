const { Dessert, Order, User } = require("../db");
const bcrypt = require("bcrypt");
const comparePassword = require("../Utils/comparePassword");

// Registrar nuevo usuario
const register = async (req, res, next) => {
  const { username, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "Usuario registrado correctamente" })
  } catch (error) {
    next(error);
  }
};

// Login con tu usurio registrado
const login = async (req, res, next) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    if (username != user.username) {
      return res.status(401).json({ message: "Usuario no registrado en la base de datos" });
    }

    const hashedPassword = user.password;
    const passwordMatch = await comparePassword(password, hashedPassword);

    if (!passwordMatch) {
      return res.status(401).json({ message: "Contraseña incorrecta" });
    } else {
      return res.status(200).json({ message: "Haz ingresado" });
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { register, login };
