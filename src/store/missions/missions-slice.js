/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getMissions } from '../actions';

const initialState = {
  missions: [],
  status: null,
};

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    missionJoined(state, action) {
      const id = action.payload;
      state.missions.map((mission) => {
        if (mission.id === id) {
          mission.joined = !mission.joined;
        }
        return mission;
      });
    },
  },
  extraReducers: {
    [getMissions.pending]: (state) => {
      state.status = 'loading missions';
    },
    [getMissions.fulfilled]: (state, action) => {
      state.missions = action.payload;
      state.status = 'loading missions complete';
    },
    [getMissions.rejected]: (state) => {
      state.status = 'fetching missions failed';
    },
  },
});

export const missionsActions = missionsSlice.actions;

export default missionsSlice.reducer;
