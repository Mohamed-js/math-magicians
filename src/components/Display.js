import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const data = props.result;
  return (
    <>
      <p className="logo">Casio Atef :)</p>
      <div className="display">
        <p>
          <span>{data.total}</span>
          <span>{data.operation}</span>
          <span>{data.next}</span>
        </p>
        <h1>{data.total}</h1>
      </div>
    </>
  );
};

// Props types and defaults
Display.propTypes = {
  result: PropTypes.string,
};
Display.defaultProps = {
  result: '0',
};

export default Display;
