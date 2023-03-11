import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedLocation: null,
};

const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    selectLocation: (state, action) => {
      state.selectedLocation = action.payload;
    },
  },
});

export const { selectLocation } = locationSlice.actions;
export default locationSlice.reducer;