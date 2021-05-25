import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <h1>{result}</h1>
  );
}

Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;
