import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type {
  UserFromBackand,
  UserSignUpForm,
  UserLoginForm,
} from '../../types/userTypes';

export const checkUserActionThunk = createAsyncThunk<UserFromBackand>(
  'user/check',
  async () =>
    axios<UserFromBackand>('/api/auth/check')
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      }),
);

export const getAllUsersActionThunk = createAsyncThunk<UserFromBackand[]>(
  'users/get',
  async () =>
    axios<UserFromBackand[]>('/api/admins')
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      }),
);

export const addNewAdminActionThunk = createAsyncThunk<
  UserFromBackand,
  UserSignUpForm
>('user/newadmin', async (data) =>
  axios
    .post<UserFromBackand>('/api/auth/newadmin', data)
    .then((res) => res.data)
    .catch(() => {
      throw new Error('err');
    }),
);

export const signInUserActionThunk = createAsyncThunk<
  UserFromBackand,
  UserLoginForm
>('user/signin', async (data) =>
  axios
    .post<UserFromBackand>('/api/auth/signin', data)
    .then((res) => res.data)
    .catch(() => {
      throw new Error('err');
    }),
);

export const logouUserActionThunk = createAsyncThunk('user/logout', async () =>
  axios
    .post('/api/auth/logout')
    .then(() => null)
    .catch(() => {
      throw new Error('err');
    }),
);
