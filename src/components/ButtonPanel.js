import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const ButtonPanel = (props) => {
  const { btnClick } = props;
  const renderButton = (name) => (
    <Button name={name} btnClick={() => btnClick(name)} />
  );

  return (
    <div className="panel">
      <div className="row">
        {renderButton('AC')}
        {renderButton('+/-')}
        {renderButton('%')}
        {renderButton('÷')}
      </div>
      <div className="row">
        {renderButton('7')}
        {renderButton('8')}
        {renderButton('9')}
        {renderButton('x')}
      </div>
      <div className="row">
        {renderButton('4')}
        {renderButton('5')}
        {renderButton('6')}
        {renderButton('-')}
      </div>
      <div className="row">
        {renderButton('1')}
        {renderButton('2')}
        {renderButton('3')}
        {renderButton('+')}
      </div>
      <div className="row">
        {renderButton('0')}
        {renderButton('.')}
        {renderButton('=')}
      </div>
    </div>
  );
};

// Props types and defaults
ButtonPanel.propTypes = {
  result: PropTypes.string,
};
ButtonPanel.defaultProps = {
  result: '0',
};

export default ButtonPanel;
