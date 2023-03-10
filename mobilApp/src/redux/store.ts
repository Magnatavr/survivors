import { configureStore, combineReducers } from "@reduxjs/toolkit";
import postSlice from "../features/slices/postSlice";


const rootReducer = combineReducers({
    postsData: postSlice
})

const store = configureStore({
    reducer: rootReducer
})

export default store