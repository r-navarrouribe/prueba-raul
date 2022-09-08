import PropTypes from "prop-types";
import styles from "../styles/Button.module.css";
import "@fontsource/lato";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCheck,
  faXmark,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export default function Button({ buttonType, loading, clickHandler }) {
  return (
    <button
      type="button"
      className={`${styles.mainButton} ${
        buttonType === "SUBMIT"
          ? styles.submitButton
          : buttonType === "SUCCESS"
          ? styles.successButton
          : styles.errorButton
      } ${loading && styles.loading}`}
      onClick={clickHandler}
    >
      {buttonType}
      {"\u00a0\u00a0"}
      {
        <FontAwesomeIcon
          icon={
            buttonType === "SUBMIT"
              ? faChevronRight
              : buttonType === "SUCCESS"
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
  buttonType: PropTypes.string.isRequired,
  loading: PropTypes.bool.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
