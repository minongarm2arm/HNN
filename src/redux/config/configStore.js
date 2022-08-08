import {configureStore} from "@reduxjs/toolkit";
import detail from "../modules/detail";
import comment from "../modules/comment";
import posts from '../modules/postSlice'

const store = configureStore({
  reducer: {
    detail,
    comment,
    posts,
  },
});

export default store;