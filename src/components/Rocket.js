import React from 'react';
import dummyimg from '../assets/img/planet.png';

const Rocket = () => (
  <div className="rocket-container">
    <div className="rocket-img">
      <img src={dummyimg} alt="rocket" />
    </div>
    <div className="rocket-infos">
      <h2>Falcon</h2>
      <p>
        The Rockets section displays a list of all available SpaceX rockets.
        Users can book each rocket by clicking the reservation button or
        cancel the previously made booking. The same layout is used to form
        the Dragons section
      </p>
      <button type="button">Reserve Rocket</button>
    </div>
  </div>
);

export default Rocket;
