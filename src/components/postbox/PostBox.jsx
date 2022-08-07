import React, { useState, useEffect } from "react";

//package
import styled from "styled-components";
import axios from "axios";

//assets
import placeholder from '../../src_assets/placeholder.png'

//components


const PostBox = () => {

  //post 페이지 input value를 받아서 묶어줍니다?
  const [post, setPost] = useState({
    id: '',
    image: '',
    food: '',
    restaurant: '',
    location: '',
    review: '',
  })

  const [imageSrc, setImageSrc] = useState('');
  
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const { data } = await axios.get("http://localhost:3001/posts");
    setPosts(data);
  };

  const onSubmitHandler = (post) => {
    axios.post("http://localhost:3001/posts", post);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve)=>{
      reader.onload=()=> {
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  return (
    <>
      <StPostBox>
        <StPostForm
          onSubmit={(e) => {
            onSubmitHandler(post);
          }}
        >
          <StPostImg>
            { 
              {placeholder} && 
              <img
                src={imageSrc}
                alt='이미지 업로드'
              />
            }
          </StPostImg>
          <StPostInput
            id="image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              encodeFileToBase64(e.target.files[0])
              const {value} = encodeFileToBase64(e.target.files[0]);
              // console.log(value)
              setPost({
                ...post,
                image: value,
              });
            }}
          />
          <StHelpText>
            ※ jpeg, png 파일만 가능합니다.
          </StHelpText>
          <StPostInput 
            id="food"
            placeholder="음식 이름"
            type="text"
            onChange={(e) => {
              const {value} = e.target;
              // console.log(value)
              setPost({
                ...post,
                food: value,
              });
            }}
          />
          <StPostInput 
            id="restaurant"
            placeholder="식당 이름"
            type="text"
            onChange={(e) => {
              const {value} = e.target;
              // console.log(value)
              setPost({
                ...post,
                restaurant: value,
              });
            }}
          />
          <StPostInput 
            id="location"
            placeholder="식당 위치"
            type="text"
            onChange={(e) => {
              const {value} = e.target;
              // console.log(value)
              setPost({
                ...post,
                location: value,
              });
            }}
          />
          <StTextarea
            id="review"
            placeholder='후기'
            onChange={(e) => {
              const {value} = e.target;
              // console.log(value)
              setPost({
                ...post,
                review: value,
              });
            }}
          />
          <StPostBtn>저장</StPostBtn>
        </StPostForm>
      </StPostBox>
    </>
  )
}

export default PostBox

const StPostBox = styled.div`
width: 700px;
display: flex;
flex-direction: column;
align-items: center;
margin: 50px auto;
`

const StPostImg = styled.div`
width: 300px;
height: 300px;
margin: 10px;
background-image: url('../../src_assets/placeholder.png');
`
const StHelpText = styled.p`
font-size: 13px;
font-weight: lighter;
color: #5c5c5c;
align-self: flex-start;
margin: -10px 0px 10px 15px;
`

const StPostInput = styled.input`
width: 300px;
height: 30px;
margin: 5px;
padding-left: 5px;
`

const StTextarea = styled.textarea`
width: 300px;
height: 150px;
padding: 5px;
`

const StPostForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`

const StPostBtn = styled.button`
width: 300px;
height: 40px;
margin: 10px;
`









// 나중에 별점 추가하면 사용하기
{/* <select 
            id="star"
            style={{width:'300px', margin:'5px'}}
            onChange={(e) => {
              const {value} = e.target;
              // console.log(value)
              setPost({
                ...post,
                star: value,
              });
            }}
          >
  <option disabled selected> --별점후기-- </option>
  <option> ⭐ </option>
  <option> ⭐⭐ </option>
  <option> ⭐⭐⭐ </option>
  <option> ⭐⭐⭐⭐ </option>
  <option> ⭐⭐⭐⭐⭐ </option>
</select> */}