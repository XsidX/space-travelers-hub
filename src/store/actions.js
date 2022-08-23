import { createAsyncThunk } from '@reduxjs/toolkit';

export const getRockets = createAsyncThunk('rockets/getRockets', async () => {
  const response = await fetch('https://api.spacexdata.com/v3/rockets');
  const data = await response.json();
  return data;
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
        joined: false,
      };
      missionsArray.push(missionObject);

      return missionsArray;
    });

    return missionsArray;
  },
);
