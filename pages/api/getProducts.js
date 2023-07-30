import mysql from "mysql2/promise";

export default async function tableData(req, res) {
  const dbconn = await mysql.createConnection({
    host: "localhost",
    database: "inventario",
    user: "root",
    password: "",
  });
  try {
    const query =
      `SELECT 
        productos.serial,
        clasificacion.clasif,
        proveedor.proveedor,
        productos.fven,
        productos.lote,
        productos.farmaceuta,
        productos.factura,
        productos.fcontrol
         FROM productos
         INNER JOIN clasificacion ON productos.idclasif = clasificacion.id
         INNER JOIN proveedor ON productos.idProveedor = proveedor.id`;
    const values = [];
    const [data] = await dbconn.execute(query, values);
    dbconn.end();

    res.status(200).json({producto: data})
  } catch (error) {
    console.log("Error en la consulta de datos:", error);
    res.status(500).json({error: error.message})
  }
}