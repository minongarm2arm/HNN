import React from "react";
import {removeCommentList, updateCommentList} from "./comment";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useRef, useState} from "react";
import styled from "styled-components";

const CommentItem = ({postId, id, name, date, commentText}) => {
  const dispatch = useDispatch()
  const commentList = useSelector((state) => state.comment)
  const toggleIsEdit = () => setIsEdit(!isEdit)
  const [isEdit, setIsEdit] = useState(false)
  const [commentTexts, setCommentTexts] = useState('')
  const commentTextInput = useRef()
  console.log(commentList)

  const onRemoveHandler = (a) => {
    const ids = {
      postId: id,
      id: a.id,
    }
    dispatch(removeCommentList(ids))
  }

  const onChangeTextHandler = (e) => {
    setCommentTexts(e.target.value)
  }

  const onTextSubmitHandler = () => {
    const ids = {
      postId: parseInt(postId),
      id: id,
      name: "닉네임",
      date: new Date().toLocaleString(),
      commentText:commentTexts,
    }
    dispatch(updateCommentList(ids))
    commentTextInput.current.value=""
  }

  return (
    <>
      <div className="textArea">
        <p className={'nickName'}>닉네임</p>
        {
          isEdit? (
              <input ref={commentTextInput} onChange={onChangeTextHandler} type="text"/>
            ) :
            <p className={"comment"}>{commentText}</p>
        }
        <p className={"desc"}><span className={"date"}>{date}</span></p>
      </div>
      <div className="buttonArea">
        <StButton onClick={()=>{
          onRemoveHandler()
        }} color={"red"}>삭제</StButton>
        {
          isEdit? (
              <StButton onClick={()=> {
                onTextSubmitHandler()
                toggleIsEdit()
              }} color={"blue"}>완료</StButton>
            ):
            <StButton onClick={()=> {
              toggleIsEdit()
            }} color={"blue"}>수정</StButton>
        }

      </div>
    </>
  )
}

const StCommentItem = styled.li`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px;
  margin: 10px 0;
  
  & .textArea {
    width: 85%;
    & p {
      word-break: break-all;
    }


    & .nickName {
      margin-bottom: 5px;
    }

    & .desc {
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
    }
  }
  
  & .buttonArea {
    display: flex;
    flex-direction: column;
  }

  &:first-child {
    margin-top: 0;
  }

  & .date {
    font-size: 14px;
    color: #777;
  }

  & .heart {
    margin-right: 10px;
  }
`

const StButton = styled.button`
  margin-bottom: 10px;
  background-color: transparent;
  padding: 5px 10px;
  border-radius: 5px;
  color: ${props => props.color};
  border: 1px solid #c4c4c4;
  cursor: pointer;
  
  &:hover {
    border: 1px solid ${props => props.color}; 
    background-color: ${props => props.color};
    color: white;
  }
`


export default CommentItem