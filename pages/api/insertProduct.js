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
    const {
      serial,
      clasificacion,
      descripcion,
      proveedor,
      cantidad,
      fven,
      lote,
      farmaceuta,
      factura,
      fcontrol,
      dven,
      user,
      fingreso,
      ruta,
    } = req.body;

    const query = 
    "INSERT INTO product SET " + serial;

    const result = await dbconn.query("INSERT INTO product SET ?", {
        serial,
        clasificacion,
        descripcion,
        proveedor,
        cantidad,
        fven,
        lote,
        farmaceuta,
        factura,
        fcontrol,
        dven,
        user,
        fingreso,
        ruta,
    });

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
