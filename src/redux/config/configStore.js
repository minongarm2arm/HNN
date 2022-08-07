import {configureStore} from "@reduxjs/toolkit";
import detail from "../modules/detail";
import comment from "../modules/comment";

const store = configureStore({
  reducer: {
    detail,
    comment
  },
});

export default store;