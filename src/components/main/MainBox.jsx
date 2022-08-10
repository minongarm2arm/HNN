import React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";

const MainBox = () => {
//     const [post, setPost] = useState();

//     const onSubmitHandler = (post) => {
//       axios.post("http://localhost:3001/posts", post);
//     };

//     useEffect((post) => {

//     } )

  const postList = ({ posts, imgfile }) => {
    return (
      <>
      <MainBoxContainer>
        {posts.map(post => (
          <MainBoxLayout key={posts.id}>
          <StMainBox>
            {/* <StPostImg />             */}
            확인값 1번박스
          </StMainBox>
          <p>@ UserName</p>  
          </MainBoxLayout>
        ))}
      </MainBoxContainer>
    </>
    )
  }
}

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
  background-image: url(${posts.imgfile});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

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
`;

export default MainBox;