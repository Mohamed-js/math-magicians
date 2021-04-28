import React from 'react';
import PropTypes from 'prop-types';

const Display = (props) => {
  const { result } = props;
  return (
    <>
      <p className="logo p">Casio Atef :)</p>
      <div className="display">
        <p>
          <span>{result.total}</span>
          <span>{result.operation}</span>
          <span>{result.next}</span>
        </p>
        <h2>{result.total}</h2>
      </div>
    </>
  );
};

// Props types and defaults
Display.propTypes = {
  result: PropTypes.shape({
    total: PropTypes.string,
    next: PropTypes.string,
    operation: PropTypes.string,
  }),
};
Display.defaultProps = {
  result: {},
};

export default Display;
