import React, {useEffect} from "react";
import { useDispatch } from "react-redux/es/exports";
import { getPosts } from "../redux/modules/postSlice";

// components
import CommonHeader from "../components/CommonHeader";
import EditBox from "../components/posting/EditBox";


const Edit = () => {
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <CommonHeader/>
      <EditBox/>
    </>
  )
}

export default Edit
