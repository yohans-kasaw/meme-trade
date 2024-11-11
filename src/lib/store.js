import { configureStore } from '@reduxjs/toolkit';
import usertokenReducer from './slices/userTokenSlice';
import tradingSignalReducer from './slices/tradingSignalSlice';
import alarmReducer from './slices/userAlarmsSlice';

const store = configureStore({
  reducer: {
    userTokens: usertokenReducer,
    tradingSignals: tradingSignalReducer,
    userAlarms: alarmReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default store;
