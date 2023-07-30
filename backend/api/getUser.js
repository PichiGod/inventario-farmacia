import mysql from "mysql2/promise";

export default async function tableData(req, res) {
  const dbconn = await mysql.createConnection({
    host: "sql201.infinityfree.com",
    database: "if0_34721661_inventario",
    user: "if0_34721661",
    password: "Yl7PKTLjcyaPNTd",
  });
  try {
    const query =
      `SELECT * FROM user`;
    const values = [];
    const [data] = await dbconn.execute(query, values);
    dbconn.end();

    res.status(200).json({users: data})
  } catch (error) {
    console.log("Error en la consulta de datos:", error);
    res.status(500).json({error: error.message})
  }
}