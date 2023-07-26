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
        productos.descripcion, 
        clasificacion.clasif, 
        proveedor.proveedor, 
        productos.cantidad,
        productos.fven, 
        productos.lote, 
        productos.farmaceuta, 
        productos.fingreso, 
        user.usuario, 
        productos.factura, 
        productos.fcontrol, 
        productos.dven, 
        imagenes.ruta 
        FROM productos 
        INNER JOIN clasificacion ON productos.idclasif = clasificacion.id
        INNER JOIN proveedor ON productos.idProveedor = proveedor.id
        INNER JOIN user ON productos.idUser = user.id
        INNER JOIN imagenes ON productos.idImagen = imagenes.id`;
    
    const values = [];
    const [data] = await dbconn.execute(query, values);
    dbconn.end();

    res.status(200).json({products: data})
  } catch (error) {
    console.log("Error en la consulta de datos:", error);
    res.status(500).json({error: error.message})
  }
}
