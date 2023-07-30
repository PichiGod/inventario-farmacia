import mysql from "mysql2/promise";

export default async function tableData(req, res) {
  const dbconn = await mysql.createConnection({
    host: "localhost",
    database: "inventario",
    user: "root",
    password: "",
  });

  try {
    let params = new URLSearchParams(req.params);
    let serial  = params.get("serial");
    
    const query =
      `SELECT productos.idclasif, productos.idProveedor, proveedor.proveedor, clasificacion.clasif
      FROM productos 
      INNER JOIN proveedor ON productos.idProveedor = proveedor.id
      INNER JOIN clasificacion ON clasificacion.id = productos.idclasif
      WHERE productos.serial = `+ serial + ``;

    //      const query =
    //   `SELECT 
    //     idclasif,
    //     idProveedor
    //      FROM productos WHERE serial = ` + serial;

    const values = [];
    const [data] = await dbconn.execute(query, values);
    dbconn.end();

    res.status(200).json({search: data})
  } catch (error) {
    console.log("Error en la consulta de datos:", error);
    res.status(500).json({error: error.message})
  }
}