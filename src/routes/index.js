const { Router } = require("express");
const { Deserts } = require("../Utils/cardDeserts");
const {login, register} = require("../controllers/auth")
const {sendOrder} = require("../controllers/order")
const {postDessert} = require("../controllers/dessert")
const axios = require("axios");
const { getAllDessert } = require("../controllers/Concat");
const {getApiDessert} = require("../controllers/Api")
const {Dessert}= require("../db")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);




/*******************GET /desserts**********************/

router.get("/api/dessert", async (req, res) => {
  const name = req.query.name;

  try {
    let listDesserts = await getAllDessert();

    if (name) {
      let dessertName = await listDesserts.filter((elem) =>
        elem.name_dessert.toLowerCase().includes(name.toLowerCase())
      );

      if (dessertName.length) {
        res.status(200).send(dessertName);
      } else {
        res.status(404).send("Dessert no encontrado");
      }
    } else {
      res.status(200).send(listDesserts);
    }
  } catch (error) {
    console.log(error);
  }
});

/******************GET /desserts/{id}*******************/

router.get("/api/dessert/:id", async (req, res) => {
  let { id } = req.params;

    try {
      if(Number(id)){

        const getIdDessert = await getAllDessert();

        let idDessert = await getIdDessert.filter(
          (elem) => elem.id == id.toUpperCase()
        )

        if(idDessert.length){
          res.status(200).json(idDessert);
        }else{
          res.status(404),send("Id postre no encontrado")
        }

      }else{
        let dbId = await Dessert.findAll({
          where: {id: id}
        });
        res.send(dbId)
      }
     
    } catch (e) {
      res.status(400).json({ error: e.message });
    }
  
});




router.post('/api/register', register);
router.post('/api/login', login);
router.post('/api/order', sendOrder);
router.post('/api/post-dessert', postDessert);

module.exports = router;
