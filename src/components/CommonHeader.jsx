import React, {useEffect} from "react";
import styled from "styled-components";
import logo700 from '../src_assets/logo700.png'
import {useState} from "react";
import {useNavigate} from "react-router-dom";

const CommonHeader = () => {
  const navigate = useNavigate()
  const [isLog, setIsLog] = useState(true)


  useEffect(()=> {
    if(localStorage.getItem("token")===null) {
      setIsLog(true)
    }else {
      setIsLog(false)
    }
  })

  const onLogoutHandler = () => {
    localStorage.clear()
    navigate("/login")
  }

  return (
    <StCommonHeader>
      <StLeftContainer>
        <StLogo onClick={() => navigate("/")}>
          <StLogoImg/>
        </StLogo>
      </StLeftContainer>
      <StRightContainer>
        <StNavContainer>
          <StNavUl>
            <StNavLi onClick={() => navigate("/mypage")}>
              <div className={"item"}>My Page</div>
            </StNavLi>
            <StNavLi onClick={() => navigate("/post")}>
              <div className={"item"}>Posting</div>
            </StNavLi>
            <StNavLi onClick={() =>(
              isLog?navigate("/login"): onLogoutHandler()
            ) }
              >
              <div className={"item"}>{isLog ? "LogIn" : "LogOut"}</div>
            </StNavLi>
          </StNavUl>
        </StNavContainer>
      </StRightContainer>
    </StCommonHeader>
  )
}

export default CommonHeader

const StCommonHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

const StLeftContainer = styled.div``
const StRightContainer = styled.div``


const StNavContainer = styled.nav`
  & > ul {
    display: flex;
    list-style: none;

    & > li {
      padding: 10px 20px;
      cursor: pointer;
    }
  }
`

const StNavUl = styled.ul`
  display: flex;
  list-style: none;
`

const StNavLi = styled.li`
  padding: 10px 20px;
  cursor: pointer;

  &:hover .item::before {
    width: 100%;
  }

  & .item {
    position: relative;
    transition: 0.5s;

    &::before {
      content: "";
      transition: 0.5s;
      position: absolute;
      bottom: -5px;
      width: 0;
      left: 0;
      height: 2px;
      background-color: #fcafbd;
    }
  }

`

const StLogo = styled.div`
  font-size: 30px;
`

const StLogoImg = styled.div`
  background-image: url(${logo700});
  width: 70px;
  height: 70px;
  background-position: center;
  background-size: cover;
  cursor: pointer;
`