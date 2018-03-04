import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ children, selected }) => (
  <li
    className={selected ? 'mdc-list-item mdc-list-item--selected' : 'mdc-list-item'}
  >
    {children}
  </li>
);

ListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
  ]),
  selected: PropTypes.bool,
};

export default ListItem;
