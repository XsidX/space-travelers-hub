import { configureStore } from '@reduxjs/toolkit';
import missionsReducer from './missions/missions-slice';
import rocketsReducer from './rockets/rockets-slice';

const store = configureStore({
  reducer: {
    missions: missionsReducer,
    rockets: rocketsReducer,
  },
});

export default store;
