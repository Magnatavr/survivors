/* eslint-disable no-param-reassign */
import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';
import type { PostType } from '../../types';
import { getPostsThunk } from '../actions';

type InitialState = {
  posts: PostType[];
  favorites: PostType[];
};

const initialState: InitialState = {
  posts: [],
  favorites: [],
};

const postSlice = createSlice({
  name: 'postSlice',
  initialState,
  reducers: {
    addToFavorites(state, action: PayloadAction<PostType>) {
      const check = state.favorites.find((el) => el.id === action.payload.id);
      if (!check) {
        state.favorites.push(action.payload);
      }
    },
    deleteFromFavorites(state, action:PayloadAction<PostType['id']>){
      const index = state.favorites.findIndex(el=> el.id === action.payload)
      state.favorites.splice(index,1)
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getPostsThunk.fulfilled, (state, action) => {
      state.posts = action.payload;
    });
  },
});
export default postSlice.reducer;

export const { addToFavorites, deleteFromFavorites } = postSlice.actions;
