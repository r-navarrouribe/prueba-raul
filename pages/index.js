import Head from "next/head";
import Submit from "../Components/Submit";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prueba ténica Zizeron</title>
        <meta name="description" content="Prueba técnica para Zizeron" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1 className={styles.title}>Prueba ténica Zizeron</h1>
      </header>

      <main className={styles.main}>
        <Submit />
      </main>

      <footer className={styles.footer}>
        <span>
          {"Puedes ver el código en "}
          <a
            href="https://github.com/r-navarrouribe/prueba-tecnica-zizeron"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </span>
        <span>Hecho por Raúl Navarro Uribe</span>
      </footer>
    </div>
  );
}
