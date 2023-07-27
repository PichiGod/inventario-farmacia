import Head from "next/head";
import styles from "../../styles/IngresoE.module.css";
import { useState, useEffect } from "react";
import Link from "next/link";
import axios from "axios";

export default function ingresoE() {
  const [dataResponse, setdataResponse] = useState({});

  var [data, setData] = useState({
    usuario: "",
    password: ""
  });

  useEffect(() => {
    async function getPageData() {
      const apiUrl = `/api/getUser`;
      const response = await fetch(apiUrl);
      const res = await response.json();
      console.log(res.users);
      setdataResponse(res.users);
    }
    getPageData();
  }, []);

  const handleChange = ({ target: { name, value } }) =>{
    setData({ ...data, [name]: value });
  }

  const handleSubmit = async () => {
    //console.log(data);
    if (data.password.trim() == "" || data.usuario.trim() == ""){
      return alert("Campo vacio")
    }
    for (let index = 0; index < dataResponse.length; index++) {
      if ((dataResponse[index].usuario.toLowerCase() == data.usuario.toLowerCase())) {
         return alert("El usuario ya existe");
      }
    }
    try {
      const response = await axios.post('/api/insertUser', data);
      console.log(response.data);
    } catch (error) {
      console.log(error, error.response.data);
    }
  };


  return (
    <div className={styles.container}>
      <Head>
        <title>Ingreso Empleado</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Ingreso empleados...</h1>

        <div className={styles.loginForm}>
          <form>
            <label htmlFor="usuario">Nombre de usuario (Maxima Cadena: 25)</label>
            <br />
            <input
              type="text"
              id="usuario"
              name="usuario"
              maxLength={25}
              onChange={handleChange}
              className={styles.form}
              required
            />
            <br />
            <br />
            <label htmlFor="password">
              Contraseña (Maxima Cadena: 25)
            </label>
            <br />

            <input
              type="password"
              id="password"
              name="password"
              onChange={handleChange}
              maxLength={25}
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