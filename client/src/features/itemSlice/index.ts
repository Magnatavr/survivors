import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CountryType, LocationType } from '../../types';
import {
  getAllCountryActionThunk,
  getAllLocationActionThunk,
  getAllLocationsInCountryActionThunk,
} from '../actions/itemActions';

type InitialStateType = {
  country: CountryType[];
  allLocations: LocationType[];
  locations: LocationType[];
};

const initialState: InitialStateType = {
  country: [],
  allLocations: [],
  locations: [],
};

const itemSlice = createSlice({
  name: 'itemSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        getAllCountryActionThunk.fulfilled,
        (state, action: PayloadAction<CountryType[]>) => {
          state.country = action.payload;
        },
      )
      .addCase(
        getAllLocationsInCountryActionThunk.fulfilled,
        (state, action: PayloadAction<LocationType[]>) => {
          state.locations = action.payload;
        },
      )
      .addCase(
        getAllLocationActionThunk.fulfilled,
        (state, action: PayloadAction<LocationType[]>) => {
          state.allLocations = action.payload;
        },
      );
  },
});

export default itemSlice.reducer;
