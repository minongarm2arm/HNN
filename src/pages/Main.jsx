import React from "react";
import styled from "styled-components"
import CommonHeader from "../components/CommonHeader"
import { IoSearch } from "react-icons/io5"
import placeholder from "../src_assets/placeholder.png";
// import MainBox from "../components/main/MainBox";
import MyPageBox from "../components/main/MyPageBox";
import { useNavigate } from "react-router-dom";


const Main = () => {
  const navigate = useNavigate();
  const user = localStorage.getItem("user")

  console.log(user)

  if (user===null||user===undefined) {
    navigate('/login')
    return
  }
  
  return (
    <>
      <CommonHeader />
      <MyPageBox />

    </>
  )
}

const SearchBar = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;

const MainBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MainBoxLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 33%;

  & > p {
    /* flex: 1 1 100%; */
    margin-top: 7px;
    width: 220px;
  }
`;

const StMainBox = styled.div`
  width: 220px;
  height: 200px;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
`;

const StPostImg = styled.div`
  background-image: url(${placeholder});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const StPostHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  
  &:hover {
    opacity: 1;
  }
  & .hoverText {
    padding: 30px;
    & p {
      margin: 10px 0;
    }
  }
`


export default Main;