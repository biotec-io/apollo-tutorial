import React from 'react';
import PropTypes from 'prop-types';

import '../styles/toolbar.scss';

const Toolbar = ({ children }) => (
  <header className="mdc-toolbar">
    <div className="mdc-toolbar__row">
      <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
        <span className="mdc-toolbar__title">{children}</span>
      </section>
    </div>
  </header>
);

Toolbar.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
  ]),
};

export default Toolbar;
