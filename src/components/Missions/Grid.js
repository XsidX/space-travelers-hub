import React from 'react';
import propTypes from 'prop-types';

const GridHead = ({ children }) => (
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

const GridRow = ({ mission }) => {
  const { name, description } = mission;

  return (
    <>
      <div className="grid__item grid__mission ">
        <h3 className="grid__item--title">{name}</h3>
      </div>
      <div className="grid__item grid__description">
        <h3>{description}</h3>
      </div>
      <div className="grid__item grid__status">
        <button className="not-member" type="button">
          NOT A MEMBER
        </button>
        <button type="button">Join Mission</button>
      </div>
    </>
  );
};

GridHead.propTypes = {
  children: propTypes.node.isRequired,
};

GridRow.propTypes = {
  mission: propTypes.shape({
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
  }).isRequired,
};

export { GridHead, GridRow };
