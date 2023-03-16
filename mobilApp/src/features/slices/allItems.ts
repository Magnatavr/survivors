import { createSlice } from '@reduxjs/toolkit';
import { getArticleThunk, getCountryThunk, getLocationsThunk } from '../actions';
import { getDangerosThunk } from '../actions/dangerosAction';

const initialState = {
  countres:[],
  location:[],
  dangeros:[],
  article:[]
};

const allItems = createSlice({
  name: 'items',
  initialState,
  reducers: {},
  extraReducers:(builder) => {
    builder
    .addCase(getCountryThunk.fulfilled,(state,action)=> {
      state.countres = action.payload;

    })
    .addCase(getLocationsThunk.fulfilled,(state,action)=> {
      state.location = action.payload;

    })
    .addCase(getDangerosThunk.fulfilled,(state,action)=> {
      state.dangeros = action.payload;

    })
    .addCase(getArticleThunk.fulfilled,(state,action)=> {
      state.article = action.payload;

    })
  }
});

// export const { selectLocation } = allItems.actions;
export default allItems.reducer;