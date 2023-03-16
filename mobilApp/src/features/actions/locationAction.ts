import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getLocationsThunk = createAsyncThunk(
'location/get',
async (id) => axios.get(`/api/locations/${id}`)
.then((res) => res.data)
.catch((err)=> {
    throw new Error('location get Error');
})
) 
