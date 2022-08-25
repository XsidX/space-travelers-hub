import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { GridHead, GridRow } from './Grid';
import { getMissions } from '../../store/actions';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions.missions) || [];

  useEffect(() => {
    dispatch(getMissions());
  }, []);

  return (
    <GridHead>
      {missions.map((mission) => (
        <GridRow key={mission.id} mission={mission} />
      ))}
    </GridHead>
  );
};

export default Missions;
