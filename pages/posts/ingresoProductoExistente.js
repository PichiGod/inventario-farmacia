import Head from "next/head";
import "bootstrap/dist/css/bootstrap.css";
import styles from "../../styles/IngresoP.module.css";
import images from "./assests/images";
import Image from "next/image";

export default function productoExistente() {
  return (
    <div>
      <Head>
        <title>Ingreso Producto - E</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1 className='text-center'>Ingresar producto existente</h1><br/>

      <div className="container text-center bg-light">
          <form>
            <div className="row">
              <div className="col">
                <div className="d-flex justify-content-center align-items-center">
                  <div className="col mt-5">
                    <Image src={images.img} alt="imagenPrueba" className={styles.ingresoIMG} />
                    <br />
                    <input type="file" className="mt-3" accept=".jpg, .png, .wepb" required />
                  </div>
                </div>
              </div>

              <div className="col">
                <div className="d-flex flex-row justify-content-evenly">
                  <div className="me-3">
                    <label htmlFor="serial"># Serial</label>
                    <br />
                    <input
                      type="number"
                      id="serial"
                      name="serial"
                      required
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="clasif">Clasificacion</label>
                    <br />
                    <input
                      type="text"
                      id="clasif"
                      name="clasif"
                      required
                    ></input>
                  </div>
                </div>

                <label htmlFor="descrip" className="mt-2">
                  Descripcion
                </label>
                <br />
                <input
                  type="text"
                  maxLength={75}
                  id="descrip"
                  name="descrip"
                  className={styles.descripcion}
                  required
                ></input>

                <div className="d-flex flex-row justify-content-evenly mt-2">
                  <div className="me-3">
                    <label htmlFor="proveedor">Proveedor</label>
                    <br />
                    <input
                      type="text"
                      id="proveedor"
                      name="proveedor"
                      required
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="cantidad">Cantidad del producto</label>
                    <br />
                    <input type="number" id="cant" name="cant" required></input>
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
                      required
                    ></input>
                  </div>

                  <div>
                    <label htmlFor="factr">Factura de recepcion</label>
                    <br />
                    <input
                      type="text"
                      maxLength={8}
                      id="factr"
                      name="factr"
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
                      maxLength={8}
                      id="control"
                      name="control"
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
                      required
                    ></input>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <span className={styles.inline}>
            <button className={styles.submitLogin}>Ingresar</button>
            <a className={styles.Back}>Volver</a>
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
                    <input type="date"></input>  */
}

{
  /* <label htmlFor="pIngreso">Usuario ingreso</label>
                    <input type="date"></input>  */
}