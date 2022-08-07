import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getList = createAsyncThunk("GET_LIST", async (id) => {
  const response = await axios.get(`http://localhost:3001/comment?postId=${id}`)
  return response.data
})

export const addList = createAsyncThunk("ADD_LIST", async (newList) => {
  const response = await axios.post(`http://localhost:3001/comment?postId=${newList.postId}`, newList)
  return response.data
})

const initialState = [];

// 리듀서 counterSlice
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [getList.fulfilled]: (state, {payload}) => [...payload],
    [addList.fulfilled]: (state, {payload}) => [...state, payload]
  }
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;