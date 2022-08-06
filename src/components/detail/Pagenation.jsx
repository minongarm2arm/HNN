import styled from "styled-components";
import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {addComment} from "../../redux/modules/comment";
import uuid from "uuid";
import {nanoid} from "nanoid";

const Pagnation = () => {
  const dispatch = useDispatch()
  const [commentText, setCommentText] = useState()

  const onAddComment = () => {
    dispatch(
      addComment({
        commentText,
        id: nanoid(),
        date: new Date().toLocaleString(),
        likes: 0,
      })
    )
  }

  return (
    <StPagnationWrapper>
      <StCommentInput>
        <input onChange={(e)=> {
          setCommentText(e.target.value)
        }} placeholder={"댓글 달기..."} type="text"/>
        <button onClick={onAddComment}>게시</button>
      </StCommentInput>
      <StPagNation>
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
      </StPagNation>
    </StPagnationWrapper>
  )
}



const StPagnationWrapper = styled.div``

const StCommentInput = styled.div`
  border-top: 1px solid #bdbdbd;
  border-bottom: 1px solid #bdbdbd;
  display: flex;
  padding: 10px 0;
  align-items: center;

  & input {
    flex: 1;
    height: 40px;
    border: none;
    font-size: 16px;
    padding-right: 20px;
    padding-left: 10px;
    &:focus {
      outline: none;
    }
    
    &:focus ~ button {
      opacity: 1;
    }
  }

  & button {
    border: none;
    background-color: transparent;
    padding: 10px;
    font-size: 16px;
    color: #0000ff;
    opacity: 0.5;
    font-weight: 700;
    cursor: pointer;
  }
`

const StPagNation = styled.div`
  display: flex;
  justify-content: center;

  & > button {
    border: none;
    background-color: transparent;
    padding: 10px;
    margin: 0 5px;
    cursor: pointer;
    &:hover {
      color: #0000ff;
    }
  }
`

const StPageNumBox = styled.ol`
  display: flex;
  list-style: none;
  justify-content: space-between;
  
  & > li {
    & button {
      cursor: pointer;
      border: none;
      background-color: transparent;
      padding: 10px;
      margin: 0 5px;
      &:hover {
        color: #0000ff;
      }
    }
  }
`
export default Pagnation