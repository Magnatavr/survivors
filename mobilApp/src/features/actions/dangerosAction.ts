import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

type MyPostData = {
    arg1: number;
    arg2: number;
  }

export const getDangerosThunk = createAsyncThunk(
'dangeros/get',
async (data:MyPostData) => axios.post(`/api/locations/{id}`,data)
.then((res) => res.data)
.catch((err)=> {
    throw new Error('location get Error');
})
) 
