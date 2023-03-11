import { createSlice } from '@reduxjs/toolkit';
import type { UserType, UserFromBackand } from '../../types/userTypes';
import {
  checkUserActionThunk,
  logouUserActionThunk,
  signInUserActionThunk,
  addNewAdminActionThunk,
  getAllUsersActionThunk,
} from '../actions';

type InitialStateType = {
  admin: UserFromBackand[];
  sessions: UserType;
};

const initialState: InitialStateType = {
  admin: [],
  sessions: {
    user: undefined,
    status: 'fetching',
  },
};

const userSlice = createSlice({
  name: 'userSlice',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getAllUsersActionThunk.fulfilled, (state, action) => {
        state.admin = action.payload;
      })
      .addCase(checkUserActionThunk.fulfilled, (state, action) => {
        state.sessions.status = 'logged';
        state.sessions.user = action.payload;
      })
      .addCase(signInUserActionThunk.fulfilled, (state, action) => {
        state.sessions.status = 'logged';
        state.sessions.user = action.payload;
      })
      .addCase(addNewAdminActionThunk.fulfilled, (state, action) => {
        state.admin.push(action.payload);
      })
      .addCase(logouUserActionThunk.fulfilled, (state) => {
        state.sessions.user = undefined;
        state.sessions.status = 'idle';
      })
      .addCase(signInUserActionThunk.rejected, (state) => {
        state.sessions.user = undefined;
        state.sessions.status = 'err';
      })
      .addCase(addNewAdminActionThunk.rejected, (state) => {
        state.sessions.user = undefined;
        state.sessions.status = 'err';
      })
      .addCase(checkUserActionThunk.rejected, (state) => {
        state.sessions.user = undefined;
        state.sessions.status = 'err';
      });
  },
});

export default userSlice.reducer;
