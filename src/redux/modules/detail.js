import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";

export const getPost = createAsyncThunk("GET_POST", async (id) => {
  try {
    const response = await axios.get(`http://try-eat.herokuapp.com/posts?id=${id}`)
    return response.data
  }catch (err) {
    console.log(err)
  }

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