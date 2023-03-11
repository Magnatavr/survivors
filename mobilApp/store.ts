import { configureStore } from '@reduxjs/toolkit'

const initialState = {
  selectedCountry: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SELECT_COUNTRY':
      return {
        ...state,
        selectedCountry: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore(reducer);

export default store;
