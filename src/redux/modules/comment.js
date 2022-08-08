import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getCommentList = createAsyncThunk("GET_LIST", async (id) => {
  const response = await axios.get(`http://localhost:3001/comment?postId=${id}`)
  return response.data
})

export const addCommentList = createAsyncThunk("ADD_LIST", async (newCommentList) => {
  const response = await axios.post(`http://localhost:3001/comment?postId=${newCommentList.postId}`, newCommentList)
  return response.data
})

const initialState = [];

// 리듀서 counterSlice
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentList.fulfilled]: (state, {payload}) => [...payload],
    [addCommentList.fulfilled]: (state, {payload}) => [...state, payload]
  }
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;