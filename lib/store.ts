import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/authSlice';
import notificationReducer from './features/notificationSlice';
import dataReducer from './features/dataSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    notification: notificationReducer,
    data: dataReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;