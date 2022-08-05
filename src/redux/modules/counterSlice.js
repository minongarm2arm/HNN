import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  number: 0,
}

// 리듀서 counterSlice
export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    // 리듀서 안에 만든 함수 자체가 리듀서 로직이자, Action creator가 된다 ✨
    addNumber: (state, action) => {
      state.number = state.number + action.payload;
    },

    minusNumber: (state, action) => {
      state.number = state.number - action.payload;
    },
  },
});

export const { addNumber, minusNumber } = counterSlice.actions;
export default counterSlice.reducer;