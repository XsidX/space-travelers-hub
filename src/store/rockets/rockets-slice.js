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
  reducers: {
    rocketReserved(state, action) {
      const id = action.payload;
      state.rockets.map((rocket) => {
        const x = rocket.id.toString();
        if (x === id) {
          rocket.reserved = !rocket.reserved;
          const span = document.getElementById(x);
          const cancelBtn = document.querySelector('.cancelButton');
          const reserveBtn = document.querySelector('.btn');
          span.classList.toggle('desactive');
          cancelBtn.classList.toggle('desactive');
          reserveBtn.classList.toggle('desactive');
        }

        return rocket;
      });
    },
  },
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
