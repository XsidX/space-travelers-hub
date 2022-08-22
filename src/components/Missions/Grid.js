import React from 'react';
import propTypes from 'prop-types';

const Grid = ({ children }) => (
  <div className="grid">
    <div className="grid__item grid__mission">
      <h3 className="grid__item--title">Mission</h3>
    </div>
    <div className="grid__item grid__description">
      <h3 className="grid__item--title">Description</h3>
    </div>
    <div className="grid__item grid__status">
      <h3 className="grid__item--title">Status</h3>
    </div>
    {children}
  </div>
);

Grid.propTypes = {
  children: propTypes.node.isRequired,
};

export default Grid;
