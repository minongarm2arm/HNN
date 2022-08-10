import React from "react";
import {removeCommentList, updateCommentList} from "../../redux/modules/comment";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useRef, useState} from "react";
import styled from "styled-components";

const CommentItem = ({postId, id, name, date, commentText}) => {
  const dispatch = useDispatch()
  const toggleIsEdit = () => setIsEdit(!isEdit)
  const [isEdit, setIsEdit] = useState(false)
  const [inputText, setInputText] = useState(commentText)
  const [commentTexts, setCommentTexts] = useState('')
  const commentTextInput = useRef()

  const onRemoveHandler = () => {
    const ids = {
      postId: postId,
      id: id,
    }
    dispatch(removeCommentList(ids))
  }

  const onChangeTextHandler = (e) => {
    setCommentTexts(e.target.value)
    setInputText(e.target.value)
  }

  const onTextSubmitHandler = () => {
    if(commentTextInput.current.value.length < 1) {
      alert("1글자 이상 입력 해주세요")
      return
    }
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
              <input value={inputText} ref={commentTextInput} onChange={onChangeTextHandler} type="text"/>
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