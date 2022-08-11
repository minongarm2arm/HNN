/* eslint-disable */
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import placeholder from '../../src_assets/placeholder.png'
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { getPosts, patchPosts } from "../../redux/modules/postSlice";


const EditBox = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);

  // id에 해당하는 포스트를 ...???
  const {id} = useParams();
  
  //불러오기..?
  const postEdit = useSelector((state)=> state.posts)

  const [post, setPost] = useState()
  const [posts, setPosts] = useState(null);

  const fetchPosts = async () => {
    const { data } = await axios.get('https://try-eat.herokuapp.com/posts?id={id}');
    setPosts(data);
  };
  
  useEffect(() => {
    fetchPosts();
  }, []);


  // 업로드한 이미지 미리보기
  const [imageSrc, setImageSrc] = useState('');

 
  const [editImg, setEditImg] = useState('');
  console.log(editImg)
 
  useEffect(()=> {
    dispatch(getPosts(id))
    setEditImg(editPost.imgFile)
  },[])

  // base64 이미지 인코딩
  const encodeFileToBase64 = async (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    return new Promise((resolve)=>{
      reader.onload=()=> {
        setImageSrc(reader.result);
        setEditPost({
          ...editPost,
          imgFile: reader.result,
        });
        resolve();
      };
    });
  };

  
  // 수정안 했을 때 이전 값 저장
  const [editPost, setEditPost] = useState({
    id: id,
    imgFile: postEdit.imgFile,
    food: postEdit.food,
    restaurant: postEdit.restaurant,
    location: postEdit.location,
    review: postEdit.review,
  });

  //imageFile code
  // console.log(postEdit.imgFile)


  // 수정버튼 이벤트 핸들러
  const onEditHandler = (id, edit) => {
    if (window.confirm('🐷: 포스팅을 수정할까요?')) {
      alert('수정 완료!')
      axios.patch(`https://try-eat.herokuapp.com/posts/${id}`, edit);
      navigate(`/detail/${id}`)
    }
  };

  //삭제버튼 이벤트 핸들러
  const onDeleteHandler = (id) => {
    if (window.confirm('🐷: 포스팅을 삭제할까요?')) {
      alert('삭제 완료!')
      axios.delete(`https://try-eat.herokuapp.com/posts/${id}`)
      navigate('/')
    }
    
  };

  
  return (
    <>
      <StPostBox>
        <StPostForm>
          <StPostImg>
            {
              change ? 
                <img src={imageSrc} alt=''/> 
                : <img src={postEdit.imgFile} alt=''/>
            }
          </StPostImg>
          <StPostInput
            id="image"
            type="file"
            accept="image/png, image/jpeg"
            onChange={(e) => {
              const {value} = encodeFileToBase64(e.target.files[0]);
              setEditImg(imageSrc)
              setEditPost({
                ...editPost,
                imgFile: value,
              });
              setChange(true)
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
           <StBtns>
            <StPostBtn
              color="#fcafbd"
              onClick={()=>onEditHandler(id, editPost)}
            >수정</StPostBtn>
            <StPostBtn
              color="#fcafbd"
              onClick={() => navigate("/")}
            >취소</StPostBtn>
          </StBtns>
          <StPostDeleteBtn
            onClick={()=>onDeleteHandler(id)}
          >포스팅 삭제하기</StPostDeleteBtn>
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
& img{
  width: 300px;
  height: 300px;
  object-fit: cover;
}
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

const StBtns = styled.div`
width  : 300px;
`

const StPostBtn = styled.button`
width: 140px;
height: 40px;
margin: 10px 5px;
cursor: pointer;
background: none;
border: solid 1px;
:hover {
  color: ${props=>props.color};
}
`

const StPostDeleteBtn = styled.button`
background: none;
border: none;
padding: 40px;
font-size: 15px;
text-decoration: underline;
color: #a5a5a5;
cursor: pointer;
:hover {
  color: red;
  font-weight: bold;
}
`
