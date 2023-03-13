import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'


export const getArticleThunk = createAsyncThunk(
'articles/get',
async (id) => axios.get(`/api/articles/${id}`)
.then((res) => res.data)
.catch((err)=> {
    throw new Error('articles get Error');
})
) 
