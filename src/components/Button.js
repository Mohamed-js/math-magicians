import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  return <button>{props.name}</button>;
};

// Props types and defaults
Button.propTypes = {
  name: PropTypes.string,
};

export default Button;
