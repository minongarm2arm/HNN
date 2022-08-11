import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "axios";


export const getCommentList = createAsyncThunk("GET_LIST", async (id) => {
  try {
    const response = await axios.get(`https://try-eat.herokuapp.com/comment?postId=${id}`)
    return response.data
  } catch (err) {
    console.log(err)
  }
})

export const addCommentList = createAsyncThunk("ADD_LIST", async (newCommentList) => {
  try {
    const response = await axios.post(`https://try-eat.herokuapp.com/comment?postId=${newCommentList.postId}`, newCommentList)
    return response.data
  } catch (err) {
    console.log(err)
  }
})

export const removeCommentList = createAsyncThunk("REMOVE_LIST", async (ids) => {
  try {
    await axios.delete(`https://try-eat.herokuapp.com/comment/${ids.id}`)
    return (ids.id)
  } catch (err) {
    console.log(err)
  }
})

export const updateCommentList = createAsyncThunk("UPDATE_LIST", async (ids) => {
  console.log(ids.id)
  try {
    const response =  await axios.put(`https://try-eat.herokuapp.com/comment/${ids.id}`, {
      ...ids
    })
    return response.data
  } catch (err) {
    console.log(err)
  }
})


const initialState = [];

// 리듀서 counterSlice
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {},
  extraReducers: {
    [getCommentList.fulfilled]: (state, {payload}) => [...payload],
    [addCommentList.fulfilled]: (state, {payload}) => [...state, payload],
    [removeCommentList.fulfilled]: (state, {payload}) => (
      state.filter((list) => list.id !== payload)
    ),
    [updateCommentList.fulfilled]: (state, {payload}) => {
      return state.map((list) => {
        if (list.id === payload.id) {
          return {...list, commentText: payload.commentText}
        } else {
          return list
        }
      })
    },
  }
});

export const {} = commentSlice.actions;
export default commentSlice.reducer;