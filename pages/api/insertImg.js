import mysql from "mysql2/promise";
const fs = require('fs');

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

        let samplefile; 
        let uploadpath;

        if(!req.files || Object.keys(req.files).length() === 0){
            throw new Error("No file uploaded.");
        }

        samplefile = req.files.file;
        
        
        uploadpath = __dirname + "pages/posts/assests/img" + samplefile;
        
        fs.writeFileSync(`./${uploadpath}`, samplefile);

        const result = await dbconn.query('INSERT INTO imagenes (ruta) VALUES (?)', uploadpath);

    
    // const usuario = req.body.usuario;
    // const password = req.body.password;

    // //const {usuario, password} = req.body;

    // //const query = "INSERT INTO proveedor(proveedor) VALUES ?", [proveedor];

    // const result = await dbconn.query(`INSERT INTO user (id, usuario, password) VALUES (NULL, ?, ?)`,[usuario, password]);
    // dbconn.end();

    return res.status(200).json({ ...req.body, id: result.ruta });
  } catch (error) {
    console.log("Error en la consulta de datos:", error);
    res.status(500).json({ error: error.message });
  }
};