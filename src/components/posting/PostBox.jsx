import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import placeholder from '../../src_assets/placeholder.png'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getPosts } from "../../redux/modules/postSlice";


const PostBox = () => {
  const dispatch = useDispatch();

  // id ~~???
  const {id} = useParams();
 
  useEffect(()=> {
    dispatch(getPosts(id))
  },[])

  //json-server에 post로 input 저장
  const [post, setPost] = useState()

  const onSubmitHandler = (post) => {
    axios.post("http://localhost:3001/posts", post);
  };

  // 업로드한 이미지 미리보기 파일
  const [imageSrc, setImageSrc] = useState('');
  
  // 이미지 압축하기 
  const imgCompress = async (fileBlob) => {
    console.log('압축시작')

    const options = {
      maxSizeMB: 0.02,
      maxWidthOrHeight: 300,
      useWebWorker: true,
    };
    try {
      const compressedFile = await imageCompression(fileBlob, options)
    }
    catch (error) {
      console.log(error);
    }
  };

  const imageHandler = async (e) => {
    // 이벤트에 있는 이미지들을 압축하고 base64로 변환해서 변수에 담는다.
      const newImages = await Promise.all([...e.target.files].map(async (file) => 
        imageCompression.getDataUrlFromFile(await imageCompression(file, compressOptions))));
  }

  // 이미지 인코딩해서 미리보기 띄우고 저장
  const encodeFileToBase64 = async (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve)=>{
      reader.onload=()=> {
        setImageSrc(reader.result);
        setPost({
          ...post,
          imgFile: reader.result,
        })
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
              <img src={imageSrc} alt=''/>
          </StPostImg>
          <StPostInput
            id="image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              const {value} = encodeFileToBase64(e.target.files[0]);
              setPost({
                ...post,
                imgFile: value,
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
background-image: url(${placeholder});
background-size: cover;
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
