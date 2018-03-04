import React from 'react';
import PropTypes from 'prop-types';

/* styles */
import '../styles/input.scss';

const TextField = props => (
  <div className="mdc-text-field mdc-text-field__fullwidth">
    <input
      className="mdc-text-field__input"
      type="text"
      placeholder={props.placeholder}
      onKeyUp={props.onKeyUp}
    />
  </div>
);

TextField.propTypes = {
  placeholder: PropTypes.string,
  onKeyUp: PropTypes.func,
};

export default TextField;
