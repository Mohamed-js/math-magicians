import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  return <h1>{props.result}</h1>;
};

// Props types and defaults
Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
