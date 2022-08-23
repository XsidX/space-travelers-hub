import React, { useEffect } from 'react';
import { getRockets } from '../store/actions';
import { useDispatch, useSelector } from 'react-redux';

const Rocket = () => {
  const dispatch= useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets) || [];

  useEffect(() => {
    dispatch(getRockets());
  }, []);
  return (
    rockets.map((rocket) => (
      <div className="rocket-container">
    <div className="rocket-img">
      <img src={rocket.flickr_image} alt="rocket" />
    </div>
    <div className="rocket-infos">
      <h2>{rocket.rocket_name}</h2>
      <p>
       {rocket.description}
      </p>
      <button id='${rocket.id}' type="button">Reserve Rocket</button>
    </div>
  </div>
    ))
  )
  
};

export default Rocket;
