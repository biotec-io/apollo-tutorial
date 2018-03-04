import React from 'react';
import PropTypes from 'prop-types';

import '../styles/list.scss';

const List = ({ children }) => <ul className="mdc-list">{children}</ul>;

List.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.func,
    PropTypes.array,
  ]),
};

export default List;
