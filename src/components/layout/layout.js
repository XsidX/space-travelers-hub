import React from 'react';
import propTypes from 'prop-types';

const Layout = ({ children }) => <div className="layout">{children}</div>;

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
