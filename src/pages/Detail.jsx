import React from "react";
import styled from "styled-components";
import CommonHeader from "../components/CommonHeader";
import placeholder from '../src_assets/placeholder.png'
import Comment from "../components/detail/Comment";
import Pagnation from "../components/detail/Pagenation";

const Detail = () => {
  return (
    <>
      <CommonHeader/>
      <StDetail>
        <StLeftContainer>
          <StImageBox>
          </StImageBox>
          <StImageInfo>
            <StInfoLeft>
              <p>음식명</p>
              <p>가게명</p>
              <p>가게위치</p>
            </StInfoLeft>
            <StInfoRight>
              <p>userName</p>
              <p><span>♥ 59</span><span>■25</span></p>
            </StInfoRight>
          </StImageInfo>
          <StImageDesc>
            맛있어요~
          </StImageDesc>
        </StLeftContainer>
        <StRightContainer>
          <Comment />
          <Pagnation />
        </StRightContainer>
      </StDetail>
    </>
  )
}

const StDetail = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 84px);
  padding-bottom: 30px;
`

const StLeftContainer = styled.div`
  width: 50%;
  height: 100%;
`

const StImageBox = styled.div`
  background-image: url(${placeholder});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  padding-bottom: 70%;
`

const StImageInfo = styled.div`
  display: flex;
  justify-content: space-between;
`

const StInfoLeft = styled.div``
const StInfoRight = styled.div``
const StImageDesc = styled.div``


const StRightContainer = styled.div`
  width: 50%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default Detail

