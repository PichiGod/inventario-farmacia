import Head from "next/head";
import styles from "../../styles/IngresoE.module.css";
import {useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

export default function ingresoE() {
  const [dataResponse, setdataResponse] = useState({
  });

  const [clasificacion, setClasificacion] = useState({
    clasificacion: ""
  });

  useEffect(() => {
    async function getPageData() {
      const apiUrl = `../../backend/api/getClasificacion`;
      const response = await fetch(apiUrl);
      const res = await response.json();
      console.log(res.clasif);
      setdataResponse(res.clasif);
    }
    getPageData();
  }, []);

  const handleChange = ({ target: { name, value } }) =>{
    setClasificacion({ ...clasificacion, [name]: value });
  }
    

  const handleSubmit = async (e) => {
    console.log(clasificacion);
    if (clasificacion.clasificacion.trim() == ""){
      return alert("Campo vacio")
    }
    for (let index = 0; index < dataResponse.length; index++) {
      if ((dataResponse[index].clasif.toLowerCase().trim() == clasificacion.clasificacion.toLowerCase().trim())) {
         return alert("Esta clasificacion ya existe");
      }
    }
    try {
        const response = await axios.post("../../backend/api/insertClasificacion", clasificacion);
        console.log(response.data)
    } catch (error) {
        console.log(error, error.response.data);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Ingreso Clasificacion</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Ingreso Clasificacion...</h1>

        <div className={styles.loginForm}>
          <form>
            <label htmlFor="user">Nombre de clasificacion (Maxima Cadena: 25)</label>
            <br />
            <input
              type="text"
              id="clasificacion"
              name="clasificacion"
              maxLength={25}
              onChange={handleChange}
              className={styles.form}
              required
            />
            <br />
            <br />

            <span className={styles.inline}>
              <button
                className={styles.submitLogin}
                onClick={(e) => {e.preventDefault(), console.log("Enviando Datos..."), handleSubmit()}}
              >
                Registrar
              </button>

              <Link className={styles.Back} href="/posts/tabla">Volver</Link>
            </span>
          </form>
        </div>
      </main>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `}</style>

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
