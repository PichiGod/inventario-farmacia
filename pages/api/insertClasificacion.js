import mysql from "mysql2/promise";

const dbconn = await mysql.createConnection({
    host: "localhost",
    database: "inventario",
    user: "root",
    password: "",
  });

export default async function handler(req, res) {
  switch (req.method) {
    case "POST":
      return await saveProduct(req, res);
    default:
      return res.status(400).send("Method not allowed");
  }
}

const saveProduct = async (req, res) => {
  try {
    const clasificacion = req.body.clasificacion;

    //const query = "INSERT INTO proveedor(proveedor) VALUES ?", [proveedor];

    const result = await dbconn.query("INSERT INTO clasificacion(clasif) VALUES (?)", clasificacion);
    dbconn.end();

    return res.status(200).json({ ...req.body, id: result.clasificacion });
  } catch (error) {
    return (res.status(500).json({ message: error.response.data }));
    }
};
