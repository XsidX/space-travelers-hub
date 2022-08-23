/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { getRockets } from '../actions';

const initialState = {
  rockets: [],
  status: null,
};

const rocketsSlice = createSlice({
  name: 'rockets',
  initialState,
  reducers: {},
  extraReducers: {
    [getRockets.pending]: (state) => {
      state.status = 'loading rockets';
    },
    [getRockets.fulfilled]: (state, action) => {
      state.rockets = action.payload;
      state.status = 'loading rockets complete';
    },
    [getRockets.rejected]: (state) => {
      state.status = 'fetching rockets failed';
    },
  },
});

export const rocketsActions = rocketsSlice.actions;

export default rocketsSlice.reducer;
