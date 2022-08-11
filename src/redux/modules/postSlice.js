/* eslint-disable */
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios from "axios";

const initialState = {
  posts: [],
  isloading: false,
  error: null,
};

export const getPosts = createAsyncThunk(
  "getPosts",
  async (id) => {
    try {
      const data = await axios.get(`http://localhost:3001/posts?id=${id}`);
      // console.log(data.data[0]);
      return data.data[0]
    } catch (error) {
      console.log(error);
    }
  }
);

export const patchPosts = createAsyncThunk(
  "patchPosts",
  async (id) => {
    try {
      const data = await axios.patch(`http://localhost:3001/posts?id=${id}`);
      console.log(data.data[0]);
      return data.data[0]
    } catch (error) {
      console.log(error);
    }
  }
);

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: {
    [getPosts.fulfilled]: (state, {payload}) => payload,
    [patchPosts.fulfilled]: (state, {payload}) => payload,
  }
});

export const {} = postsSlice.actions;
export default postsSlice.reducer;