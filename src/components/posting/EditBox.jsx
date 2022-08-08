import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import imageCompression from "browser-image-compression";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import placeholder from '../../src_assets/placeholder.png'
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getPosts, patchPosts } from "../../redux/modules/postSlice";


const EditBox = () => {
  const dispatch = useDispatch();

  // id에 해당하는 포스트를 불러온다 
  const {id} = useParams();

  useEffect(()=> {
    dispatch(getPosts(id))
  },[])

  
  const postEdit = useSelector((state)=> state.posts)

  
  // 업로드한 이미지 미리보기
  const [imageSrc, setImageSrc] = useState('');

  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const { data } = await axios.get('http://localhost:3001/posts?id={id}');
    setPosts(data);
  };
  
  useEffect(() => {
    fetchPosts();
  }, []);

  // base64 이미지 인코딩
  const encodeFileToBase64 = async (fileBlob) => {
    
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    
    return new Promise((resolve)=>{
      reader.onload=()=> {
        // console.log(reader.result)
        setImageSrc(reader.result);
        resolve();
      };
    });
  };

  
  // 수정한 값??
  const [editPost, setEditPost] = useState({
    id: id,
    image: postEdit.image,
    food: postEdit.food,
    restaurant: postEdit.restaurant,
    location: postEdit.location,
    review: postEdit.review,
  });

  // 수정버튼 이벤트 핸들러
  const onEditHandler = (id, edit) => {
    axios.patch(`http://localhost:3001/posts/${id}`, edit);
  };

  
  return (
    <>
      <StPostBox>
        <StPostForm
          onSubmit={(e) => {
            onEditHandler(id, editPost);
          }}
        >
          <StPostImg>
            { 
              // {placeholder} && 
              <img
                src={imageSrc}
                alt=''
              />
            }
          </StPostImg>
          <StPostInput
            id="image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              const {value} = e.target;
              setEditPost({
                ...editPost,
                image: value,
              });
              // ~~~리사이즈~~~
              encodeFileToBase64(e.target.files[0])
            }}
          />
          <StHelpText>
            ※ jpeg, png 파일만 가능합니다.
          </StHelpText>
          <StPostInput 
            id="food"
            placeholder="음식"
            type="text"
            defaultValue={postEdit.food}
            onChange={(e) => {
              const {value} = e.target;
              setEditPost({
                ...editPost,
                food: value,
              });
            }}
          />
          <StPostInput 
            id="restaurant"
            placeholder="식당 이름"
            defaultValue={postEdit.restaurant}
            type="text"
            onChange={(e) => {
              const {value} = e.target;
              // console.log(value)
              setEditPost({
                ...editPost,
                restaurant: value,
              });
            }}
          />
          <StPostInput 
            id="location"
            placeholder="식당 위치"
            defaultValue={postEdit.location}
            type="text"
            onChange={(e) => {
              const {value} = e.target;
              // console.log(value)
              setEditPost({
                ...editPost,
                location: value,
              });
            }}
          />
          <StTextarea
            id="review"
            placeholder='후기'
            defaultValue={postEdit.review}
            onChange={(e) => {
              const {value} = e.target;
              // console.log(value)
              setEditPost({
                ...editPost,
                review: value
              });
            }}
          />
          <StPostBtn>수정</StPostBtn>
        </StPostForm>
      </StPostBox>
    </>
  )
}

export default EditBox

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
