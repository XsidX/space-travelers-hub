import React from 'react';
import Grid from './Grid';

const Missions = () => (
  <Grid>
    <div className="grid__item grid__mission ">
      <h3 className="grid__item--title">Thaicom</h3>
    </div>
    <div className="grid__item grid__description">
      <h3>
        The Missions section displays a list of current missions along with
        their brief description and participation status. There is also a button
        next to each mission that allows users to join the selected mission or
        leave the mission the user joined earlier.
      </h3>
    </div>
    <div className="grid__item grid__status">
      <button className="not-member" type="button">
        NOT A MEMBER
      </button>
      <button type="button">Join Mission</button>
    </div>
  </Grid>
);

export default Missions;
