/* eslint-disable import/prefer-default-export */
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'
import type { PostType } from "../../types";

export const getPostsThunk = createAsyncThunk<PostType[]>(
'posts/get',
async ()=> axios.get<PostType[]>('https://api.opendota.com/api/heroStats')
.then((res) => res.data)
.catch((err)=> {
    throw new Error('post get Error');
})

) 

