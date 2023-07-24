import Head from "next/head";
import styles from "../../styles/IngresoE.module.css";



export default function ingresoE() {
  maxLengthCheck = (object) => {
  if (object.target.value.length > object.target.maxLength) {
   object.target.value = object.target.value.slice(0, object.target.maxLength)
    }
  }
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
            <label htmlFor="user">Nombre de usuario (Maxima Cadena: 15)</label>
            <br />
            <input
              type="text"
              id="user"
              maxLength={15}
              className={styles.form}
            />
            <br />
            <br />
            <label htmlFor="password" maxLength={10}>
              Contraseña (Maxima Cadena: 10)
            </label>
            <br />

            {/* ARREGLAR MAX LENGTH, EN TODO */}
            <input
              type="input"
              id="password"
              name="password"
              maxLength={10}
              value={userName}
              onInput={this.maxLengthCheck}
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
