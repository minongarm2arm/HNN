import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {addLikes} from "../../redux/modules/comment";
import axios from "axios";

const Comment = () => {
  const comment = useSelector(state=>state.comment.list)
  const dispatch = useDispatch()
  const localData = "http://localhost:3001/list"

  const callSomethingAxios = () => {
    axios.get()
  }

  // useEffect()

  const onAddLikes = (id) => {
    dispatch(
      addLikes({
        id,
      })
    )
  }

  return (
    <>
    <StCommentList>
      {comment.map((a)=> (
        <StCommentItem key={a.id}>
          <p><span>닉네임</span>:{a.commentText}</p>
          <p className={"desc"}>{a.date} <span onClick={()=> {
            onAddLikes(a.id)
          }}>♥{a.likes}</span></p>
        </StCommentItem>
      ))}
    </StCommentList>
    </>
  )
}

const StCommentList = styled.ul`
  list-style: none;
`

const StCommentItem = styled.li`
  width: 100%;
  border: 1px solid black;
  padding: 10px;
  margin: 15px 0;
  & .desc {
    display: flex;
    justify-content: space-between;
  }
`

export default Comment