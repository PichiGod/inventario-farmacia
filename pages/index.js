import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Inventario - Login</title>
        <link rel="icon" href="/favicon.ico" />  
      </Head>

      {/* Agregar una ruta fija para el unico ADMIN */}

      <main>
        <h1 className={styles.title}>
          Inventario de farmacos
        </h1>
        <h3 className={styles.subtitle}>Desarrollado por: José Duarte</h3>

        <div className={styles.loginForm}>
          <form>
            <label for='user'>Usuario</label><br/>
            <input type='text' id='user' name='user' className={styles.form}/><br/><br/>
            <label for='password'>Password</label><br/>
            <input type='password' id='password' className={styles.form}/><br/><br/>
            <button type='submit' id='submit-login' className={styles.submitLogin}>Ingresar</button>
          </form>
        </div>

      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel" className={styles.logo} />
        </a>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
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
  )
}
