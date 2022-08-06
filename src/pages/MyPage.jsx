import React from "react";
import styled from "styled-components"
import CommonHeader from "../components/CommonHeader"
import Layout from "../components/Layout"
import { IoSearch } from "react-icons/io5"
import { HiOutlineUserCircle } from "react-icons/hi"



const MyPage = () => {
  return (
        <Layout>
        <CommonHeader />
        <h2>마이페이지</h2>
        <ProfileContainer>
          <HiOutlineUserCircle size="150" color="gray"/>
          <div>
          <input type="text" placeholder="User ID" />
          <input type="text" placeholder="My Comment" />
          <button>프로필 수정</button>
          </div>
        </ProfileContainer>

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
        </MainBoxContainer>
      </Layout>
  )
}

const ProfileContainer = styled.div`
  display: flex;
  margin: 10px;
  margin-top: 20px;
  gap: 10px;

  & > div {
    display: flex;
    flex-flow: column;
    margin: 10px;
    margin-top: 30px;
    margin-bottom: 100px;
    gap: 10px;
  }
`;

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
  flex-wrap: wrap;
  margin-top: 50px;

  & > p {
    flex: 1 1 100%;
    margin-top: 7px;
  }
`;

const MainBox = styled.div`
  width: 180px;
  height: 200px;
  border: 1px solid black;
  border-radius: 30px;
`;

export default MyPage