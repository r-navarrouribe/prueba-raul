import styles from "../styles/Home.module.css";

export default function Footer() {
  return (
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
  );
}
