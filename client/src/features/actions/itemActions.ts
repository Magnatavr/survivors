import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type {
  CountryLocDangTypeForm,
  CountryLocTypeForm,
  CountryType,
  DangerType,
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

export const getAllDangerActionThunk = createAsyncThunk<DangerType[]>(
  'item/getdangers',
  async () =>
    axios<DangerType[]>('/api/dangers')
      .then((res) => res.data)
      .catch(() => {
        throw new Error('err');
      }),
);

export const redactCheckboxLocationActionThunk = createAsyncThunk<
  LocationType,
  { locationId: number; currCountry: number | null }
>('redact/conloc', async (data) =>
  axios
    .post<LocationType>('/api/locatos', data)
    .then((res) => res.data)
    .catch(() => {
      throw new Error('err');
    }),
);

export const deleteCheckboxLocationActionThunk = createAsyncThunk<
  number,
  { locationId: number; currCountry: number | null }
>('delete/conloc', async (data) =>
  axios
    .delete<number>('/api/locatos/delitos', { data })
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
export const getAllDangersInLocationActionThunk = createAsyncThunk<
  DangerType[],
  CountryLocDangTypeForm
>('itemdanger/get', async (data) =>
  axios
    .post<DangerType[]>(`/api/dangers/admindang`, data)
    .then((res) => res.data)
    .catch(() => {
      throw new Error('err');
    }),
);
