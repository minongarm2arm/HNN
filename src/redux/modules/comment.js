import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  list:[
    {
      commentText: "맛있어보여요",
      name: "개똥이",
      id: 1,
      date: "2022-08-06 4시 26분",
      likes: 0,
    },
    {
      commentText: "이런걸 왜먹음?",
      name: "철수",
      id: 2,
      date: "2022-08-06 6시 99분",
      likes: 0,
    }
  ],
}

// 리듀서 counterSlice
export const commentSlice = createSlice({
  name: "comment",
  initialState,
  reducers: {
    // 리듀서 안에 만든 함수 자체가 리듀서 로직이자, Action creator가 된다 ✨
    addComment: (state, action) => {
      state.list = [...state.list, action.payload]
    },
    addLikes: (state, action) => {
      state.list.map((a)=> (
        a.id === action.payload.id ? a.likes += 1 : state.list
      ))
    },

  },
});

export const {addComment, addLikes} = commentSlice.actions;
export default commentSlice.reducer;