import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import '../styles/card.scss';

const Card = ({ children }) => (
  <div className="mdc-card">
    {children}
  </div>
);

Card.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]),
};

export default Card;
