const { Order } = require("../db");

//Enviar un pedido

const sendOrder = async (req, res) => {
  const { name_client, email, cellphone, direction, dessert, instructions } =
    req.body;

  try {
    const order = new Order({
      name_client,
      email,
      cellphone,
      direction,
      dessert,
      instructions,
    });
    await order.save();
    res.json({ message: "Pedido enviado" });
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { sendOrder };
