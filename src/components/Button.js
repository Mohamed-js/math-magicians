import React from 'react';
import PropTypes from 'prop-types';

const Button = (props) => {
  const { name, btnClick } = props;
  return (
    <button onClick={() => btnClick(name)} type="button">
      {name}
    </button>
  );
};

Button.propTypes = {
  name: PropTypes.string,
  btnClick: PropTypes.func,
};
Button.defaultProps = {
  name: '0',
  btnClick: PropTypes.func,
};

export default Button;
