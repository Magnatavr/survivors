import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getCountryThunk = createAsyncThunk(
'country/get',
async ()=> axios.get('/api/country/')
.then((res) => res.data)
.catch((err)=> {
    throw new Error('post get Error');
})
) 

