import PropTypes from "prop-types";

export default function Button({ title, clickHandler }) {
  return (
    <button type="button" onClick={clickHandler}>
      {title}
    </button>
  );
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  clickHandler: PropTypes.func.isRequired,
};
