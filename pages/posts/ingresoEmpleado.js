import Head from "next/head";
import styles from "../../styles/IngresoE.module.css";

export default function ingresoE() {
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
            <label htmlFor="email">Email:</label>
            <br />
            <input type="text" id="email" className={styles.form} />
            <br />
            <br />
            <label htmlFor="password">Contraseña:</label>
            <br />
            <input
              type="input"
              id="password"
              name="password"
              className={styles.form}
            />
            <br />
            <br />

            <span className={styles.inline}>
              <button
                className={styles.submitLogin}
                onClick={() => alert("Enviando datos...")}
              >
                Registrar
              </button>

              <a className={styles.Back}>Volver</a>
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
