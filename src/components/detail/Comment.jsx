import React, {useEffect} from "react";
import styled from "styled-components";
import {useDispatch, useSelector} from "react-redux";
import {getCommentList} from "../../redux/modules/comment";
import {useParams} from "react-router-dom";

const Comment = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const commentList = useSelector((state)=> state.comment)

  useEffect(()=> {
    dispatch(getCommentList(id))
  },[])

  return (
    <>
      <StCommentList>
        {commentList.map((a) => (
          <StCommentItem key={a.id}>
            <p><span>닉네임</span>:{a.commentText}</p>
            <p className={"desc"}><span className={"date"}>{a.date}</span><span><span
              className={"heart"}>❤️</span>{a.likes}</span></p>
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
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  padding: 10px;
  margin: 15px 0;

  & .desc {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
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

export default Comment