import { useState } from "react";
import getBoolean from "../services/getBoolean";
import Button from "./Button";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/Home.module.css";

export default function Submit() {
  // Constant declarations
  const [buttonState, setButtonState] = useState("default");

  // Button handlers
  const clickHandler = async () => {
    setButtonState("loading");
    try {
      setButtonState((await getBoolean()) === true ? "success" : "error");
    } catch (err) {
      console.log(err.message);
    }
  };

  const restartHandler = () => {
    setButtonState("default");
  };

  return (
    <main className={styles.main}>
      <Button buttonState={buttonState} clickHandler={clickHandler} />

      <button type="button" onClick={restartHandler}>
        Restart
        {"\u00a0\u00a0"}
        {<FontAwesomeIcon icon={faRotateLeft} />}
      </button>
    </main>
  );
}
