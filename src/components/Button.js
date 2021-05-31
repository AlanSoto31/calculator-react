import React from 'react';
import PropTypes from 'prop-types';

const Button = ({
  name, clickHandler2, color, wide,
}) => (
  <button
    className="btn"
    style={{ width: wide ? '50%' : '25%', background: color }}
    type="button"
    onClick={() => clickHandler2(name)}
  >
    {name}
  </button>
);

Button.propTypes = {
  name: PropTypes.string.isRequired,
  clickHandler2: PropTypes.func.isRequired,
  color: PropTypes.string.isRequired,
  wide: PropTypes.bool.isRequired,
};

export default Button;
