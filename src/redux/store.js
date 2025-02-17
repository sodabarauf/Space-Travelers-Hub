import { configureStore } from '@reduxjs/toolkit';
import { logger } from 'redux-logger';
import missionsReducer from './missions/missionsSlice';
import rocketsReducer from './rockets/rocketsSlice';
import dragonsReducer from './dragons/dragonsSlice';

const store = configureStore({
  reducer: {
    rockets: rocketsReducer,
    missions: missionsReducer,
    dragons: dragonsReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
