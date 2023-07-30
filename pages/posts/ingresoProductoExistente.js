import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/IngresoP.module.css";
import images from "../../public/assests/images";
import Image from "next/image";
import axios from "axios";
import { useState, useEffect } from "react";
import QRCode from "qrcode";
import Link from "next/link";

export default function productoNuevo() {
  const [dataProveedor, setdataProveedor] = useState([]);

  const [dataTabla, setdataTabla] = useState([]);

  const [search, setSearch] = useState([]);

  const [searchClasif, setSearchClasif] = useState([]);
  const [searchProveedor, setSearchProveedor] = useState([]);
  const [searchidC, setSearchidC] = useState([]);
  const [searchidP, setSearchidP] = useState([]);

  // const id = JSON.parse(localStorage.getItem("id"));
  // console.log(id);

  var hoy = new Date();
  let day = hoy.getDate();
  //console.log(day); // 23

  let month = hoy.getMonth() + 1;
  //console.log(month + 1); // 8

  let year = hoy.getFullYear();
  //console.log(year); // 2022

  let format = year + "-" + month + "-" + day;
  //console.log(format); // 7/23/2022

  //hoy.setHours(0,0,0,0);
  // console.log(hoy);

  const [dataClasif, setdataClasif] = useState([]);

  useEffect(() => {
    async function getPageData() {
      const apiUrl1 = `../../backend/api/getClasificacion`;
      const response = await fetch(apiUrl1);
      const res = await response.json();
      console.log(res.clasif);
      setdataClasif(res.clasif);

      const apiUrl2 = `../../backend/api/getProveedor`;
      const response2 = await fetch(apiUrl2);
      const res2 = await response2.json();
      console.log(res2.proveedor);
      setdataProveedor(res2.proveedor);

      const apiUrl3 = `../../backend/api/getProducts`;
      const response3 = await fetch(apiUrl3);
      const res3 = await response3.json();
      console.log(res3.producto);
      setdataTabla(res3.producto);

      // const apiUrl4 = `/api/getUser`;

      // const id = JSON.parse(localStorage.getItem("id"));
      // console.log(id);

      // let uploadpath = __dirname + "pages/posts/assests/img";
      // console.log(uploadpath);
    }
    getPageData();
  }, []);

  const [product, setProduct] = useState({
    serial: 0,
    clasificacion: 0,
    descripcion: "",
    proveedor: 0,
    cantidad: 0,
    fven: "",
    lote: 0,
    farmaceuta: "",
    factura: "",
    fcontrol: "",
    dven: "",
    user: 0,
    fingreso: format,
    ruta: "",
  });

  // const [serial, setSerial] = useState(0);
  // const [clasificacion, setClasificacion] = useState('');
  // const [descripcion, setDescripcion] = useState('');
  // const [proveedor, setProveedor] = useState('');
  // const [cantidad, setCantidad] = useState(0);
  // const [fven, setFven] = useState(Date);
  // const [lote, setLote] = useState(0);
  // const [farmaceuta, setFarmaceuta] = useState('');
  // const [factura, setFactura] = useState('');
  // const [fcontrol, setFcontrol] = useState('');
  // const [dven, setDven] = useState(Date);
  // const [ruta, setRuta] = useState('');

  const [qrcode, setQrcode] = useState("");

  const handleSubmit = async (e) => {
    const id = JSON.parse(localStorage.getItem("id"));
    //console.log(id);

    // var file = document.getElementById("ruta").files;
    // console.log(file);

    // const file = document.getElementById("ruta").files;
    // const filedata = new FormData();
    // filedata.append("file", file);
    // console.log(file)
    // console.log(filedata);

    const data = {
      serial: product.serial,
      clasificacion: product.clasificacion,
      descripcion: product.descripcion,
      proveedor: product.proveedor,
      cantidad: parseInt(product.cantidad),
      fven: product.fven,
      lote: product.lote,
      farmaceuta: product.farmaceuta,
      factura: product.factura,
      fcontrol: product.fcontrol,
      dven: product.dven,
      user: parseInt(id),
      fingreso: format,
      ruta: 1,
    };

    console.log(data);
    // try {
    //   const res = await axios.post("/api/insertImg", {
    //   filedata,

    //     headers: {
    //     "Content-Type": "multipart/form-data",
    //     "x-rapidapi-host": "file-upload8.p.rapidapi.com",
    //     "x-rapidapi-key": "your-rapidapi-key-here",

    // },

    // });
    //   alert("Imagen guardada correctamente");
    //   console.log(res.data);
    try {
      const res1 = await axios.post("../../backend/api/insertProduct", {
        serial: product.serial,
        clasificacion: product.clasificacion,
        descripcion: product.descripcion,
        proveedor: product.proveedor,
        cantidad: parseInt(product.cantidad),
        fven: product.fven,
        lote: product.lote,
        farmaceuta: product.farmaceuta,
        factura: product.factura,
        fcontrol: product.fcontrol,
        dven: product.dven,
        user: parseInt(id),
        fingreso: format,
        ruta: 1,
      });
      console.log(res1);
      alert("Ingresado exitosamente");
    } catch (error) {
      console.log(error, error.response.data);
    }
    // } catch (error) {
    //   console.log(error, error.response);
    // }

    // // console.log(res);

    //console.log(data);

    QRCode.toDataURL("https://github.com/PichiGod").then(setQrcode);
  };

  const handleChange = ({ target: { name, value } }) => {
    setProduct({ ...product, [name]: value });
  };

  // const handleimgchange = (e) => {
  //   const file = e.target.files[0];
  //   const filedata = new FormData();
  //   filedata.append("file", file);
  //   console.log(file)
  //   console.log(filedata);
  // }

  function onFileSelected() {
    var file = document.getElementById("ruta").files;

    if (file.length > 0) {
      var fileReader = new FileReader();

      fileReader.onload = function (ev) {
        document
          .getElementById("changeImg")
          .setAttribute("srcset", ev.target.result);
      };

      fileReader.readAsDataURL(file[0]);
    }
  }

  function dosActions() {
    onFileSelected();
  }

  function searchProduct() {
    const getSerialData = async () => {
      const data = new URLSearchParams({
        serial: product.serial,
      });

      const url = `../../backend/api/getSerialData/?serial=${product.serial}`;

      const respuesta = await fetch(url, { params: data, method: "GET" });

      // setSearchClasif(respuesta.clasif);
      // setSearchProveedor(respuesta.proveedor);
      // setSearchidC(respuesta.idclasif);
      // setSearchidP(respuesta.idProveedor);

      const res = await respuesta.json();

      console.log(res.search);

      setSearch(res.search);
      setSearchClasif(res.search.clasif);
      setSearchProveedor(res.search.proveedor);
      setSearchidC(res.search.idclasif);
      setSearchidP(res.search.idProveedor);
    };
    getSerialData();
  }

  useEffect(() => {
    // this hook will get called every time myArr has changed
    // perform some action every time myArr is updated
    console.log("Updated State", search);
    
  }, [search]);

  function results() {
    // const data = JSON.stringify(search);

    // console.log(data);
    console.log(search);
    document.getElementById("proveedor").value = search.proveedor;
    document.getElementById("clasificacion").value = search.clasif;
  }

  return (
    <div>
      <Head>
        <title>Ingreso Producto - E</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="text-center">Ingresar producto existente</h1>
        <br />

        <div className="container text-center bg-light">
          <form>
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="col mt-5">
                    <Image
                      src={images.img}
                      id="changeImg"
                      alt="imagenPrueba"
                      className={styles.ingresoIMG}
                    />
                    <br />
                    <input
                      type="file"
                      name="ruta"
                      id="ruta"
                      className="mt-3"
                      accept="image/*"
                      onChange={dosActions}
                      required
                    />
                    <br />

                    <img className="mt-3" id="qr" src={qrcode}></img>
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="me-3">
                  <label htmlFor="serial"># Serial</label>
                  <br />
                  <select id="serial" name="serial" onChange={handleChange}>
                    <option defaultValue># serial</option>
                    {dataTabla.map((seriales) => {
                      return (
                        <option value={seriales.serial}>
                          {seriales.serial}
                        </option>
                      );
                    })}
                  </select>

                  <button
                    onClick={(e) => {
                      searchProduct();
                    }}
                  >
                    Buscar
                  </button>
                  {/* <input
                      type="number"
                      id="serial"
                      name="serial"
                      maxLength={6}
                      onChange={handleChange}
                      required
                    ></input> */}
                </div>
                <div className="d-flex flex-row justify-content-evenly mt-2">
                  <div>
                    <label htmlFor="clasificacion">Clasificacion</label>
                    <br />
                    <div>{search.clasif}{searchClasif}</div>
                  </div>
                </div>

                <label htmlFor="descrip" className="mt-2">
                  Descripcion
                </label>
                <br />
                <input
                  type="text"
                  maxLength={75}
                  id="descripcion"
                  name="descripcion"
                  className={styles.descripcion}
                  onChange={handleChange}
                  disabled
                ></input>

                <div className="d-flex flex-row justify-content-evenly mt-2">
                  <div className="me-3">
                    <label htmlFor="proveedor">Proveedor</label>
                    <br />
                    <div>{searchProveedor}{search.Proveedor}</div>
                  </div>

                  <div>
                    <label htmlFor="cantidad">Cantidad del producto</label>
                    <br />
                    <input
                      type="number"
                      id="cantidad"
                      name="cantidad"
                      min={0}
                      maxLength={6}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-evenly mt-2">
                  <div className="me-3">
                    <label htmlFor="fven">Fecha de vencimiento</label>
                    <br />
                    <input
                      type="date"
                      id="fven"
                      name="fven"
                      className={styles.fechaven}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="lote">Lote</label>
                    <br />
                    <input
                      type="number"
                      maxLength={6}
                      id="lote"
                      name="lote"
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-evenly mt-2">
                  <div className="me-3">
                    <label htmlFor="farmaceuta">Farmaceuta</label>
                    <br />
                    <input
                      type="text"
                      maxLength={50}
                      id="farmaceuta"
                      name="farmaceuta"
                      onChange={handleChange}
                      // PONER FUNCION QUE NO PERMITA NUMEROS
                      required
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="factr">Factura de recepcion</label>
                    <br />
                    <input
                      type="text"
                      maxLength={9}
                      id="factura"
                      name="factura"
                      onChange={handleChange}
                      required
                    ></input>
                  </div>
                </div>

                <div className="d-flex flex-row justify-content-evenly mt-2">
                  <div className="me-3">
                    <label htmlFor="control"># de control de factura</label>
                    <br />
                    <input
                      type="text"
                      maxLength={6}
                      id="fcontrol"
                      name="fcontrol"
                      onChange={handleChange}
                      required
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="dven">Dias de vencimiento</label>
                    <br />
                    <input
                      type="date"
                      id="dven"
                      name="dven"
                      className={styles.fechaven}
                      onChange={handleChange}
                      required
                    ></input>
                  </div>

                  <label htmlFor="fingreso" hidden>
                    Fecha de ingreso al sistema
                  </label>
                  <input type="date" hidden></input>

                  <label htmlFor="pIngreso" hidden>
                    Usuario ingreso
                  </label>
                  <input type="text" hidden></input>
                </div>
              </div>
            </div>
          </form>
          <span className={styles.inline}>
            <button
              className={styles.submitLogin}
              onClick={(e) => {
                e.preventDefault(),
                  console.log("Enviando Datos..."),
                  handleSubmit();
              }}
            >
              Ingresar
            </button>
            <Link className={styles.Back} href="/posts/tabla">
              Volver
            </Link>
          </span>
        </div>
      </main>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
          background-color: #74fc6f;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
{
  /* <label htmlFor="fingreso">Fecha de ingreso al sistema</label>
                    <input type="date" hidden></input>  */
}

{
  /* <label htmlFor="pIngreso">Usuario ingreso</label>
                    <input type="text" hidden></input>  */
}
