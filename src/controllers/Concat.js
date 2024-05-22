const { getApiDessert } = require("./Api");
const { getDbInfo } = require("./Db");

/*************Obtener todos los Postres************/

const getAllDessert = async () => {
  const apiInfo = await getApiDessert();
  const dbInfo = await getDbInfo();
  const allInfo = apiInfo.concat(dbInfo);
  return allInfo;
};

module.exports = { getAllDessert };