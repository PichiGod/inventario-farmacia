import mysql from "mysql2/promise";

const dbconn = await mysql.createConnection({
  host: "sql201.infinityfree.com",
  database: "if0_34721661_inventario",
  user: "if0_34721661",
  password: "Yl7PKTLjcyaPNTd",
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
    const proveedor = req.body.proveedor;

    //const query = "INSERT INTO proveedor(proveedor) VALUES ?", [proveedor];

    const result = await dbconn.query("INSERT INTO proveedor(proveedor) VALUES (?)", proveedor);
    dbconn.end();

    return res.status(200).json({ ...req.body, id: result.proveedor });
  } catch (error) {
    return (res.status(500).json({ message: error.response.data }));
    }
};
