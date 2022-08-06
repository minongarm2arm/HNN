import React, { useState, useEffect } from "react";

//package
import styled from "styled-components";
import axios from "axios";

//assets
import placeholder from '../../src_assets/placeholder.png'


const PostBox = () => {
  //input value
  const [food, setFood] = useState('');
  const [restaurant, setRestaurant] = useState('');
  const [location, setLocation] = useState('');
  const [review, setReview] = useState('');
  const [star, setStar] = useState('');

  const [post, setPost] = useState({
    id: '',
    food: '',
    restaurant: '',
    location: '',
    review: '',
    comment: null,
  })

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

  console.log(post)

  return (
    <>
      <StPostBox>
        <StPostForm
          onSubmit={(e) => {
            onSubmitHandler(post);
          }}
        >
          <StPostImg src={placeholder} alt='사진 업로드'/>
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
          <textarea
            id="review"
            cols={43} rows={4}
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
          <button>저장</button>
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

const StPostImg = styled.img`
width: 300px;
margin: 10px;
`

const StPostInput = styled.input`
width: 300px;
height: 30px;
margin: 5px;
`

const StPostForm = styled.form`
display: flex;
flex-direction: column;
align-items: center;
`









// 디벨롭
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