import React from 'react';
import PropTypes from 'prop-types';

function Display(props) {
  const { result } = props;
  return (
    <div className="disp-cont flex-e-c"><p>{result}</p></div>
  );
}

Display.propTypes = { result: PropTypes.string.isRequired };

export default Display;
