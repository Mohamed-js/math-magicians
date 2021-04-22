import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name } = props;
  return <button type="button"> {name} </button>;
};

// Props types and defaults
Button.propTypes = {
  name: PropTypes.string,
};
Button.defaultProps = {
  name: '0',
};

export default Button;
