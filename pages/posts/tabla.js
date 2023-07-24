import Head from "next/head";
import Tstyles from "../../styles/Tabla.module.css";
import "bootstrap/dist/css/bootstrap.css";

export default function tablas() {
  return (
    <div>
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
              <tr>
                <td>123456789</td>
                <td>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</td>
                <td>Medicamento</td>
                <td>Farmacia del Pueblo</td>
                <td>100</td>
                <td>2023-03-08</td>
                <td>123456</td>
                <td>Juan Perez</td>
                <td>2023-02-08</td>
                <td>Maria Garcia</td>
                <td>123456789</td>
                <td>123456</td>
                <td>30</td>
                <td>image.png</td>
              </tr>
            </tbody>
          </table>
        </div>

      </main>

      <style jsx global>{`
        th,td {
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
