import React from "react";
import styled from "styled-components";
import CommonHeader from "../components/CommonHeader";
import placeholder from '../src_assets/placeholder.png'

const Detail = () => {
  return (
    <>
      <CommonHeader/>
      <StDetail>
        <StLeftContainer>
          <StImageBox>
            {/*<StImageBoxImg src={placeholder} alt="image"/>*/}
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
          <StCommentList>
            <StCommentItem>
              <p><span>닉네임</span>: 코멘트</p>
              <p className={"desc"}>3분전 <span>♥ 59</span></p>
            </StCommentItem>
            <StCommentItem>
              <p><span>닉네임</span>: 코멘트</p>
              <p className={"desc"}>3분전 <span>♥ 59</span></p>
            </StCommentItem>
            <StCommentItem>
              <p><span>닉네임</span>: 코멘트</p>
              <p className={"desc"}>3분전 <span>♥ 59</span></p>
            </StCommentItem>
            <StCommentItem>
              <p><span>닉네임</span>: 코멘트</p>
              <p className={"desc"}>3분전 <span>♥ 59</span></p>
            </StCommentItem> <StCommentItem>
            <p><span>닉네임</span>: 코멘트</p>
            <p className={"desc"}>3분전 <span>♥ 59</span></p>
          </StCommentItem>
            <StCommentItem>
              <p><span>닉네임</span>: 코멘트</p>
              <p className={"desc"}>3분전 <span>♥ 59</span></p>
            </StCommentItem>
          </StCommentList>
          <StPageNation>
            <button> {"<"} </button>
            <StPageNumBox>
              <li>
                <button>1</button>
              </li>
              <li>
                <button>2</button>
              </li>
              <li>
                <button>3</button>
              </li>
              <li>
                <button>4</button>
              </li>
            </StPageNumBox>
            <button> ></button>
          </StPageNation>
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
  align-items: center;
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
const StCommentList = styled.ul`
  list-style: none;
`

const StCommentItem = styled.li`
  width: 100%;
  border: 1px solid black;
  padding: 10px;
  margin: 5px;
  & .desc {
    display: flex;
    justify-content: space-between;
  }
`

const StPageNation = styled.div`
  display: flex;
  justify-content: center;
`

const StPageNumBox = styled.ol`
  display: flex;
  list-style: none;
  justify-content: space-between;
`
export default Detail

