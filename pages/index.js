import Head from "next/head";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Main from "../Components/Main";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Prueba Técnica Zizeron</title>
        <meta name="description" content="Prueba técnica para Zizeron" />
        <link rel="icon" href="/zizeron.ico" />
      </Head>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
