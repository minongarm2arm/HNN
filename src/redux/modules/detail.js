import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("GET_POST", async (id) => {
  const response = await axios.get(`http://localhost:3001/posts?id=${id}`)
  console.log(response.data)
  return response.data
})

const initialState = [];

// 리듀서 counterSlice
export const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {},
  extraReducers: {
    [getPost.fulfilled]: (state, {payload}) => [...payload],
  }
});

export const {} = detailSlice.actions;
export default detailSlice.reducer;