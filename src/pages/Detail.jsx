import React from "react";
import styled from "styled-components";
import CommonHeader from "../components/CommonHeader";
import Comment from "../components/detail/Comment";
import Pagnation from "../components/detail/Pagenation";
import DetailInfo from "../components/detail/DetailInfo";

const Detail = () => {
  return (
    <>
      <CommonHeader/>
      <StDetail>
        <StLeftContainer>
         <DetailInfo/>
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
  height: calc(100vh - 110px);
  padding-bottom: 30px;
`

const StLeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`



const StRightContainer = styled.div`
  width: 50%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default Detail

