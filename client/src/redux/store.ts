import { configureStore, combineReducers } from '@reduxjs/toolkit';
import itemSlice from '../features/itemSlice';
import userSlice from '../features/userSlice';

const rootReducer = combineReducers({
  userData: userSlice,
  itemData: itemSlice,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
