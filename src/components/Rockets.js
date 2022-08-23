import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRockets } from '../store/actions';
import { rocketsActions } from '../store/rockets/rockets-slice';

const Rockets = () => {
  const dispatch = useDispatch();
  const rockets = useSelector((state) => state.rockets.rockets) || [];
  console.log(rockets.reserved);
  useEffect(() => {
    dispatch(getRockets());
  }, []);

  const toggleReserve = (e) => {
    e.preventDefault();
    const { id } = e.target;
    dispatch(rocketsActions.rocketReserved(id));
  };

  return (
    <>
      {rockets.map((rocket) => (
        <div key={rocket.id} className="rocket-container">
          <div className="rocket-img">
            <img src={rocket.flickr_image} alt="rocket" />
          </div>
          <div className="rocket-infos">
            <h2>{rocket.rocket_name}</h2>
            <p>
              <span className="desactive">Reserved</span>
              {rocket.description}
            </p>
            <button id={rocket.id} type="button" onClick={toggleReserve}>
              Reserve Rocket
            </button>
          </div>
        </div>
      ))}
    </>
  );
};

export default Rockets;
