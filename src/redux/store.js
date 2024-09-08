import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
