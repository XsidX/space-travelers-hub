import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();

  const rocketsArray = [];
  data.map((rocket) => {
    const rocketObject = {
      id: rocket.id,
      rocket_name: rocket.rocket_name,
      description: rocket.description,
      flickr_image: rocket.flickr_image,
    };
    rocketsArray.push(rocketObject);
    return rocketsArray;
  });
  return rocketsArray;
});

export const getMissions = createAsyncThunk(
  'missions/getMissions',
  async () => {
    const response = await fetch('https://api.spacexdata.com/v3/missions');
    const data = await response.json();

    const missionsArray = [];
    data.map((mission) => {
      const missionObject = {
        id: mission.mission_id,
        name: mission.mission_name,
        description: mission.description,
      };
      missionsArray.push(missionObject);

      return missionsArray;
    });

    return missionsArray;
  },
);
