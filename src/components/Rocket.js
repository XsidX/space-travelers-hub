import React from "react";

const Rocket =(rocket)=> (
    <div className="rocket-container">
          <div className="rocket-img">
            <img src={rocket.flickr_image} alt="rocket" />
          </div>
          <div className="rocket-infos">
            <h2>{rocket.rocket_name}</h2>
            <p>
              <span className="desactive">Reserved</span>
              {rocket.description}
            </p>
            <button id={rocket} type="button" onClick={toggleReserve}>
              Reserve Rocket
            </button>
          </div>
        </div>
)

export default Rocket