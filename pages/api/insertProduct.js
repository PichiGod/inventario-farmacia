import mysql, { raw } from "mysql2/promise";

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
    const serial = req.body.serial;
    const idclasif = req.body.clasificacion;
    const descripcion = req.body.descripcion;
    const idProveedor = req.body.proveedor;
    const cantidad = req.body.cantidad;
    const fven = req.body.fven;
    const lote = req.body.lote;
    const farmaceuta = req.body.farmaceuta;
    const factura = req.body.factura;
    const fcontrol = req.body.fcontrol;
    const dven = req.body.dven;
    const idUser = req.body.user;
    const fingreso = req.body.fingreso;
    const idImagen = req.body.ruta;

    // const query =
    // "INSERT INTO product SET " + serial;

    const result = await dbconn.query(
      `INSERT INTO productos 
        (id, 
        serial, 
        descripcion, 
        idclasif, 
        idProveedor,
        cantidad,
        fven,
        lote,
        farmaceuta,
        fingreso,
        idUser,
        factura,
        fcontrol,
        dven,
        idImagen) 
        VALUES 
        (NULL, 
          ?, 
          ?, 
          ?, 
          ?, 
          ?, 
          ?, 
          ?, 
          ?, 
          ?, 
          ?, 
          ?, 
          ?, 
          ?, 
          ?)`,
      [
        serial,
        descripcion,
        idclasif,
        idProveedor,
        cantidad,
        fven,
        lote,
        farmaceuta,
        fingreso,
        idUser,
        factura,
        fcontrol,
        dven,
        idImagen,
      ]
    );

    return res.status(200).json({ ...req.body, id: result.insertId });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
