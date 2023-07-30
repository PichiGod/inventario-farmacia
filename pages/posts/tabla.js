import Head from "next/head";
import Tstyles from "../../styles/Tabla.module.css";
import "bootstrap/dist/css/bootstrap.css";
import images from "../../public/assests/images";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function tablas() {
  const [dataResponse, setdataResponse] = useState([]);
  useEffect(() => {
    async function getPageData() {
      const apiUrl = `../../backend/api/getTableData`;
      const response = await fetch(apiUrl);
      const res = await response.json();
      console.log(res.products);
      setdataResponse(res.products);
    }
    getPageData();
  }, []);

  return (
    <div className="mt-3">
      <Head>
        <title>Inventario - Tablas</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Inventario</h1>

        <div className={Tstyles.DTable}>
          <table className={Tstyles.table}>
            <thead>
              <tr>
                <th>Numero Serial</th>
                <th>Descripcion</th>
                <th>Clasificacion</th>
                <th>Proveedor</th>
                <th>Cantidad</th>
                <th>Fecha de Vencimiento</th>
                <th>Lote</th>
                <th>Farmaceuta</th>
                <th>Fecha de Ingreso</th>
                <th>Usuario Ingreso</th>
                <th>Factura Recepcion</th>
                <th># de Control</th>
                <th>Dias de Vencimiento</th>
                <th>Imagen</th>
              </tr>
            </thead>
            <tbody>
              {dataResponse.map((product) => {
                return (
                  <tr>
                    <td>{product.serial}</td>
                    <td>{product.descripcion}</td>
                    <td>{product.clasif}</td>
                    <td>{product.proveedor}</td>
                    <td>{product.cantidad}</td>
                    <td>{product.fven}</td>
                    <td>{product.lote}</td>
                    <td>{product.farmaceuta}</td>
                    <td>{product.fingreso}</td>
                    <td>{product.usuario}</td>
                    <td>{product.factura}</td>
                    <td>{product.fcontrol}</td>
                    <td>{product.dven}</td>
                    <td>
                      <Image
                        src={product.ruta}
                        alt="..."
                        className="w-75 h-75"
                      />
                    </td>
                  </tr>
                );
              })}
              {/* <tr>
                <td>123456</td>
                <td>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
                <td>Medicamento</td>
                <td>Farmacia del Pueblo -Hola</td>
                <td>100000</td>
                <td>2023-03-08</td>
                <td>123456</td>
                <td>Juan Perez Medina de Medicina, Barquisimeto y Coro</td>
                <td>2023-02-08</td>
                <td>Maria Garcia</td>
                <td>123456789</td>
                <td>123456</td>
                <td>30</td>
                <td><Image src={images.img} id="imgCargar" alt="prueba" className="w-75 h-75" /></td>
              </tr> */}
            </tbody>
          </table>
        </div>

        <div className="container mt-3 pb-3 pt-3 bg-light-subtle text-emphasis-light rounded border border-3">
          <h4>Ingresar un producto</h4>
          <hr className="me-5" />
          <span className={Tstyles.inline}>
            <Link
              className="btn btn-secondary me-3"
              href="/posts/ingresoProductoExistente"
            >
              Existente
            </Link>
            <Link className="btn btn-light" href="/posts/ingresoProductoNuevo">
              Nuevo
            </Link>
          </span>
        </div>

        <div className="container mt-3 pb-3 pt-3 bg-light-subtle text-emphasis-light rounded border border-3">
          <h4>Ingresar a un empleado</h4>
          <hr className="me-5" />
          <span className={Tstyles.inline}>
            <Link
              className="btn btn-secondary me-3"
              href="/posts/ingresoEmpleado"
            >
              Ingresar
            </Link>
          </span>
        </div>

        <div className="container mt-3 pb-3 pt-3 bg-light-subtle text-emphasis-light rounded border border-3">
          <h4>Ingresar a un proveedor</h4>
          <hr className="me-5" />
          <span className={Tstyles.inline}>
            <Link
              href="/posts/ingresoProveedor"
              className="btn btn-secondary me-3"
            >
              Ingresar
            </Link>
          </span>
        </div>

        <div className="container mt-3 mb-3 pb-3 pt-3 bg-light-subtle text-emphasis-light rounded border border-3">
          <h4>Ingresar una clasificacion</h4>
          <hr className="me-5" />
          <span className={Tstyles.inline}>
            <Link
              className="btn btn-secondary me-3"
              href="/posts/ingresoClasificacion"
            >
              Ingresar
            </Link>
          </span>
        </div>

        <div className="container mt-3 mb-3 pb-3 pt-3 bg-light-subtle text-emphasis-light rounded border border-3">
          <h4>Generar reporte</h4>
          <hr className="me-5" />
          <span className={Tstyles.inline}>
            <button
              id="report"
              className="btn btn-primary"
              onClick={() => {
                const { jsPDF } = require("jspdf");
                require("jspdf-autotable");
                async function productos() {
                  var doc = new jsPDF();
                  const apiUrl = `/api/getTableData`;
                  const response = await fetch(apiUrl);
                  const res = await response.json();
                  const data = res.products;
                  // Definir el contenido del JSON
                  /*    var data = [
                        { id: 1, name: "John Doe", email: "johndoe@example.com" },
                        { id: 2, name: "Jane Smith", email: "janesmith@example.com" },
                        { id: 3, name: "Bob Johnson", email: "bobjohnson@example.com" },
                      ];
                   */
                  // Definir las columnas de la tabla
                  var columns = [
                    "Serial",
                    "Descripcion",
                    "Clasificacion",
                    "Proveedor",
                    "Cantidad",
                    "Fecha de vencimiento",
                    "Lote",
                    "Farmaceuta",
                    "Fecha de ingreso",
                    "Usuario ingreso",
                    "Factura de recepcion",
                    "# de control de factura",
                    "Dias de vencimiento"
                  ];

                  // Definir la posición inicial de la tabla
                  var startX = 10;
                  var startY = 10;

                  // Definir el ancho de cada columna
                  var columnWidths = [15, 20, 25, 20, 10, 30, 10 , 35, 30, 20, 20, 15, 30];

                  // Definir el tamaño de la fuente
                  var fontSize = 12;

                  // Definir el tamaño de la tabla
                  var pageWidth = doc.internal.pageSize.width;
                  var pageHeight = doc.internal.pageSize.height;
                  var tableWidth = columnWidths.reduce((acc, cur) => acc + cur);
                  var tableHeight = (data.length + 1) * fontSize * 1.2;
                  var x = (pageWidth - tableWidth) / 2;
                  var y = (pageHeight - tableHeight) / 2;

                  // Crear la tabla
                  doc.setFontSize(fontSize);
                  doc.text("Lista de usuarios", x, startY);
                  doc.autoTable({
                    startY: y + fontSize * 1.5,
                    head: [columns],
                    body: data.map((obj) => [
                      obj.serial,
                      obj.descripcion,
                      obj.clasif,
                      obj.proveedor,
                      obj.cantidad,
                      obj.fven,
                      obj.lote,
                      obj.farmaceuta,
                      obj.fingreso,
                      obj.usuario,
                      obj.factura,
                      obj.fcontrol,
                      obj.dven,
                    ]),
                    startY: y,
                    theme: "grid",
                    columnStyles: {
                      0: { cellWidth: columnWidths[0] },
                      1: { cellWidth: columnWidths[1] },
                      2: { cellWidth: columnWidths[2] },
                    },
                  });

                  // Guardar el PDF
                  doc.save("lista_productos.pdf");
                }
                productos();
              }}
            >
              Generar reporte
            </button>
          </span>
        </div>
      </main>

      <style jsx global>{`
        th,
        td {
          padding-right: 0.5rem;
          padding-left: 0.5rem;
          border-right: 0.1rem solid;
        }

        td {
          text-align: center;
        }

        td:nth-last-child(-n + 1) {
          border: none;
        }

        th:nth-last-child(-n + 1) {
          border: none;
        }

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
