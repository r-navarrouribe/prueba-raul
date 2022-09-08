import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";
import "@fontsource/lato";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Button({ buttonState, clickHandler }) {
  return (
    <button
      type="button"
      className={`${styles.mainButton} ${
        buttonState === "default" || buttonState === "loading"
          ? styles.submitButton
          : buttonState === "success"
          ? styles.successButton
          : styles.errorButton
      } ${buttonState === "loading" && styles.loading}`}
      onClick={clickHandler}
    >
      {buttonState === "default" || buttonState === "loading"
        ? "SUBMIT"
        : buttonState.toUpperCase()}
      {"\u00a0\u00a0"}
      {
        <FontAwesomeIcon
          icon={
            buttonState === "default" || buttonState === "loading"
              ? faChevronRight
              : buttonState === "success"
              ? faCheck
              : faXmark
          }
          className={styles.icon}
        />
      }
    </button>
  );
}

Button.propTypes = {
  buttonState: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
