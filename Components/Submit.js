import { useState } from "react";
import getBoolean from "../services/getBoolean";
import Button from "./Button";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRotateLeft } from "@fortawesome/free-solid-svg-icons";

export default function Submit() {
  // Constant declarations
  const [buttonType, setButtonType] = useState("SUBMIT");
  const [loading, setLoading] = useState(false);

  // Button handlers
  const clickHandler = () => {
    setLoading(true);
    setTimeout(() => {
      setButtonType(getBoolean() === true ? "SUCCESS" : "ERROR");
      setLoading(false);
    }, 1000);
  };

  const restartHandler = () => {
    setButtonType("SUBMIT");
  };

  return (
    <>
      <div>
        <Button
          buttonType={buttonType}
          loading={loading}
          clickHandler={clickHandler}
        />
      </div>
      <button type="button" onClick={restartHandler}>
        Restart
        {"\u00a0\u00a0"}
        {<FontAwesomeIcon icon={faRotateLeft} />}
      </button>
    </>
  );
}
