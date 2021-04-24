import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  /* eslint-disable-next-line */
  const {
    result: { total, operation, next },
  } = props;
  return (
    <>
      <p className="logo p">Casio Atef :)</p>
      <div className="display">
        <p>
          <span>{total}</span>
          <span>{operation}</span>
          <span>{next}</span>
        </p>
        <h1>{total}</h1>
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
