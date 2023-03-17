import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { CountryType, DangerType, LocationType } from '../../types';
import {
  deleteCheckboxDangerActionThunk,
  deleteCheckboxLocationActionThunk,
  getAllCountryActionThunk,
  getAllDangerActionThunk,
  getAllDangersInLocationActionThunk,
  getAllLocationActionThunk,
  getAllLocationsInCountryActionThunk,
  redactCheckboxDangerActionThunk,
  redactCheckboxLocationActionThunk,
} from '../actions/itemActions';

type InitialStateType = {
  country: CountryType[];
  allLocations: LocationType[];
  locations: LocationType[];
  allDangers: DangerType[];
  dangers: DangerType[];
};

const initialState: InitialStateType = {
  country: [],
  allLocations: [],
  locations: [],
  allDangers: [],
  dangers: [],
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
        getAllDangerActionThunk.fulfilled,
        (state, action: PayloadAction<DangerType[]>) => {
          state.allDangers = action.payload;
        },
      )
      .addCase(
        getAllDangersInLocationActionThunk.fulfilled,
        (state, action: PayloadAction<DangerType[]>) => {
          state.dangers = action.payload;
        },
      )
      .addCase(
        getAllLocationActionThunk.fulfilled,
        (state, action: PayloadAction<LocationType[]>) => {
          state.allLocations = action.payload;
        },
      )
      .addCase(redactCheckboxLocationActionThunk.fulfilled, (state, action) => {
        state.locations.push(action.payload);
      })
      .addCase(deleteCheckboxLocationActionThunk.fulfilled, (state, action) => {
        state.locations = state.locations.filter(
          (el) => el.id !== action.payload,
        );
      })
      .addCase(redactCheckboxDangerActionThunk.fulfilled, (state, action) => {
        state.dangers.push(action.payload);
      })
      .addCase(deleteCheckboxDangerActionThunk.fulfilled, (state, action) => {
        state.dangers = state.dangers.filter((el) => el.id !== action.payload);
      });
  },
});

export default itemSlice.reducer;
