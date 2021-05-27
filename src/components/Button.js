import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, clickHandler2 }) => (
  <button
    type="button"
    onClick={() => clickHandler2(name)}
  >
    {name}
  </button>
);

Button.propTypes = { name: PropTypes.string.isRequired, clickHandler2: PropTypes.func.isRequired };

export default Button;
