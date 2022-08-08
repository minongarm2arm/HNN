import React, {useEffect} from "react";
import { useDispatch } from "react-redux/es/exports";
import { getPosts } from "../redux/modules/postSlice";
import axios from "axios";

// components
import CommonHeader from "../components/CommonHeader";
import PostBox from "../components/postbox/PostBox";


const Edit = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <CommonHeader/>
      <PostBox/>
    </>
  )
}

export default Edit
