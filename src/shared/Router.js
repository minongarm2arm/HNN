import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";

//pages
import Detail from '../pages/Detail'
import Edit from '../pages/Edit'
import Login from '../pages/Login'
import Main from '../pages/Main'
import MyPage from '../pages/MyPage'
import Post from '../pages/Post'
import SignUp from '../pages/SignUp'


const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="detail" element={<Detail/>}/>
        <Route path="edit" element={<Edit/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/" element={<Main/>}/>
        <Route path="mypage" element={<MyPage/>}/>
        <Route path="post" element={<Post/>}/>
        <Route path="signup" element={<SignUp/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;