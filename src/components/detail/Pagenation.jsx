import styled from "styled-components";
import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCommentList, getCommentList} from "../../redux/modules/comment";
import {useParams} from "react-router-dom";
import {nanoid} from "nanoid";
import {useEffect} from "react";

const Pagnation = () => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const commentInput = useRef()
  const [commentText, setCommentText] = useState()
  useEffect(() => {
    dispatch(getCommentList(id))
  }, [])

  const onAddList = (e) => {
    e.preventDefault()
    const newCommentList = {
      postId: parseInt(id),
      name: "닉네임",
      date: new Date().toLocaleString(),
      commentText,
      id: nanoid(),
      isEdit:false,
    }
    dispatch(addCommentList(newCommentList))
    commentInput.current.value = ""
  }

  return (
    <StPagnationWrapper>
      <StCommentForm>
        <input ref={commentInput} onChange={(e) => {
          setCommentText(e.target.value)
        }} placeholder={"댓글 달기..."} type="text"/>
        <button onClick={onAddList}>게시</button>
      </StCommentForm>
      <StPagNation>
        <button> {"<"} </button>
        <StPageNumBox>
          <li>
            <button>1</button>
          </li>
        </StPageNumBox>
        <button> ></button>
      </StPagNation>
    </StPagnationWrapper>
  )
}


const StPagnationWrapper = styled.div``

const StCommentForm = styled.form`
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