/* eslint-disable */
import React from "react";
import styled from "styled-components"
import CommonHeader from "../components/CommonHeader"
import { IoSearch } from "react-icons/io5"
import { useEffect, useState } from "react";
import axios from "axios";
import MyPageBox from "../components/main/MyPageBox";



const MyPage = () => {

  const [nickName, setNickName] = useState("")

  const user = localStorage.getItem("user").replace(/\"/gi, "")

  const getNickName = () => {
    axios.get(`http://localhost:3001/users?email=${user}`)
      .then((res) => {
        return setNickName(res.data[0].nick)
      })
    }
    
    useEffect(() => {
      getNickName()
    },[])
    
    console.log(nickName)

  return (
    <>
      <CommonHeader />
      <StTitleText>
      <span>{nickName}</span> 님의 글 목록
      </StTitleText>

      <StAboutBox>
        <p>을지로 맛집을 조집니다</p>
      </StAboutBox>
      
      <MyPageBox />
      
      <MainBoxContainer>
        <MainBoxLayout>
          <MainBox />
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox />
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox />
        </MainBoxLayout>
      </MainBoxContainer>
    </>
  )
}
export default MyPage;

const StTitleText = styled.p`
  font-size: 35px;
  font-weight: 300;
  text-align: center;
  color: #696969;
  & span {
    color: #fcafbd
  }
`

const StAboutBox = styled.div`
  width: 90%;
  height: 100px;
  margin: 20px auto;
  background-color: #ffffff;
  border: 1px solid lightgrey;
  display: flex;
  align-items: center;
  & p {
    margin: auto;
  }
`

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
    width: 180px;
  }
`;

const MainBox = styled.div`
  width: 180px;
  height: 200px;
  border: 1px solid black;
  border-radius: 30px;
`;

