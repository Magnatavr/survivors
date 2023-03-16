import { configureStore, combineReducers } from '@reduxjs/toolkit';
import allItems from '../features/slices/allItems';

const rootReducer = combineReducers({
  sliceData: allItems,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
