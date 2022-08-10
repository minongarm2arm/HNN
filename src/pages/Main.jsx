import React from "react";
import styled from "styled-components"
import CommonHeader from "../components/CommonHeader"
import { IoSearch } from "react-icons/io5"
import placeholder from "../src_assets/placeholder.png";


const Main = () => {
  
  return (
    <>
      <CommonHeader />
      <h2>메인</h2>
      <SearchBar>
        <div>
        <input type="text" />
        <IoSearch />
        </div>
        <select>
          <option>최신순</option>
          <option>댓글순</option>
          <option>좋아요순</option>
        </select>
      </SearchBar>

      <MainBoxContainer>
        <MainBoxLayout>
          <MainBox>
            <StPostImg>

            </StPostImg>
            <StPostHover>
              <div className="hoverText">
                <p>음식명</p>
                <p>가게명</p>
                <p>가게 위치</p>
              </div>
            </StPostHover>
          </MainBox>
          <p>@ UserName</p>
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox>
            <StPostImg>

            </StPostImg>
            <StPostHover>
              <div className="hoverText">
                <p>음식명</p>
                <p>가게명</p>
                <p>가게 위치</p>
              </div>
            </StPostHover>
          </MainBox>
          <p>@ UserName</p>
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox>
            <StPostImg>

            </StPostImg>
            <StPostHover>
              <div className="hoverText">
                <p>음식명</p>
                <p>가게명</p>
                <p>가게 위치</p>
              </div>
            </StPostHover>
          </MainBox>
          <p>@ UserName</p>
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox>
            <StPostImg>

            </StPostImg>
            <StPostHover>
              <div className="hoverText">
                <p>음식명</p>
                <p>가게명</p>
                <p>가게 위치</p>
              </div>
            </StPostHover>
          </MainBox>
          <p>@ UserName</p>
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox>
            <StPostImg>

            </StPostImg>
            <StPostHover>
              <div className="hoverText">
                <p>음식명</p>
                <p>가게명</p>
                <p>가게 위치</p>
              </div>
            </StPostHover>
          </MainBox>
          <p>@ UserName</p>
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox>
            <StPostImg>

            </StPostImg>
            <StPostHover>
              <div className="hoverText">
              <p>음식명</p>
              <p>가게명</p>
              <p>가게 위치</p>
              </div>
            </StPostHover>
          </MainBox>
          <p>@ UserName</p>
        </MainBoxLayout>
      </MainBoxContainer>
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

const MainBox = styled.div`
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