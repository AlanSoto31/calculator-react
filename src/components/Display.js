import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <div className="disp-cont"><p>{result}</p></div>
  );
}

Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;
