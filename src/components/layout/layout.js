import React from 'react';
import propTypes from 'prop-types';
import Header from '../Header';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="layout__content">{children}</div>
  </div>
);

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
