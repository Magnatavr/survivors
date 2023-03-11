import { configureStore, combineReducers } from "@reduxjs/toolkit";
import locationSlice from "../features/slices/locationSlice";
import postSlice from "../features/slices/postSlice";


const rootReducer = combineReducers({
    postsData: postSlice,
    location : locationSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store