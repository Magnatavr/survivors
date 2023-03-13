import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type {
  CountryLocTypeForm,
  CountryType,
  LocationType,
} from '../../types';

export const getAllCountryActionThunk = createAsyncThunk<CountryType[]>(
  'item/get',
  async () =>
    axios<CountryType[]>('/api/country')
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      }),
);
export const getAllLocationActionThunk = createAsyncThunk<LocationType[]>(
  'item/getlocations',
  async () =>
    axios<LocationType[]>('/api/locations')
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      }),
);


export const getAllLocationsInCountryActionThunk = createAsyncThunk<
  LocationType[],
  CountryLocTypeForm
>('itemloc/get', async (data) =>
  axios
    .post<LocationType[]>(`/api/locations/loc`, { id: data })
    .then((res) => res.data)
    .catch(() => {
      throw new Error('err');
    }),
);
