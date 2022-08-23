import React from 'react';
import propTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { missionsActions } from '../../store/missions/missions-slice';

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
  const dispatch = useDispatch();
  const { id, name, description, joined } = mission;

  const toggleJoin = () => {
    dispatch(missionsActions.missionJoined(id));
  };

  return (
    <>
      <div className="grid__item grid__mission ">
        <h3 className="grid__item--title">{name}</h3>
      </div>
      <div className="grid__item grid__description">
        <h3>{description}</h3>
      </div>
      <div className="grid__item grid__status">
        <button
          className={`${joined && 'status-active'} status-btn`}
          type="button"
        >
          {joined ? 'Active Member' : 'NOT A MEMBER'}
        </button>
        <button
          className={`${joined && 'outline-red'} action-btn-outline`}
          type="button"
          onClick={toggleJoin}
        >
          {joined ? 'Leave Mission' : 'Join Mission'}
        </button>
      </div>
    </>
  );
};

GridHead.propTypes = {
  children: propTypes.node.isRequired,
};

GridRow.propTypes = {
  mission: propTypes.shape({
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    description: propTypes.string.isRequired,
    joined: propTypes.bool,
  }).isRequired,
};

export { GridHead, GridRow };
