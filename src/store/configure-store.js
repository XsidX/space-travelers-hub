import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions-slice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
  },
});

export default store;
