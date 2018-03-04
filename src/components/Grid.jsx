import React from 'react';
import PropTypes from 'prop-types';

/* Styles */
import '../styles/grid.scss';

const Grid = ({ children }) => (
  <div className="mdc-layout-grid">
    <div className="mdc-layout-grid__inner">
      {children}
    </div>
  </div>
);

Grid.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.func,
  ]),
};

export default Grid;
