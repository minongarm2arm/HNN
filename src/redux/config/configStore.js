import {configureStore} from "@reduxjs/toolkit";
import comment from "../modules/comment";

const store = configureStore({
  reducer: {
    comment,
  },
});

export default store;