const { Dessert } = require("../db");

//Postear un nuevo  postre

const postDessert = async (req, res) => {
  const { name_dessert, category, description, stock, price, image } = req.body;

  try {
    const order = new Dessert({
      name_dessert,
      category,
      description,
      stock,
      price,
      image,
    });
    await order.save();
    res.json({ message: "Postre creado" });
  } catch (error) {
    next(error);
  }
};




module.exports = { postDessert };
