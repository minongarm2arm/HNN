import {configureStore} from "@reduxjs/toolkit";
import comment from "../modules/comment";
import posts from '../modules/postSlice'

const store = configureStore({
  reducer: {
    comment,
    posts,
  },
});

export default store;