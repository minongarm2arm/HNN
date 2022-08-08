import React from "react";
import styled from "styled-components"
import CommonHeader from "../components/CommonHeader"
import Layout from "../components/Layout"
import { IoSearch } from "react-icons/io5"


const Main = () => {
  
  return (
    <Layout>
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
          <MainBox />
          <p>@ UserName</p>
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox />
          <p>@ UserName</p>
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox />
          <p>@ UserName</p>
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox />
          <p>@ UserName</p>
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox />
          <p>@ UserName</p>
        </MainBoxLayout>
        <MainBoxLayout>
          <MainBox />
          <p>@ UserName</p>
        </MainBoxLayout>
      </MainBoxContainer>
    </Layout>
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
    /* width: 180px; */
  }
`;

const MainBox = styled.div`
  width: 180px;
  height: 200px;
  border: 1px solid black;
  border-radius: 30px;
`;


export default Main;