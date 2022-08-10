import styled from "styled-components";
import React, {useRef, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addCommentList, getCommentList} from "../../redux/modules/comment";
import {useParams} from "react-router-dom";
import {nanoid} from "nanoid";
import {useEffect} from "react";

const Pagnation = ({commentPerPage, totalComments, paginate}) => {
  const dispatch = useDispatch()
  const {id} = useParams()
  const commentInput = useRef()
  const [commentText, setCommentText] = useState()
  const [curPage, setCurPage] = useState(1)
  const [btnActive, setBtnActive] = useState(1)

  const pageNumber = []
  for (let i = 1; i <= Math.ceil(totalComments / commentPerPage); i++) {
    pageNumber.push(i)
  }
  console.log(pageNumber)

  useEffect(() => {
    dispatch(getCommentList(id))
  }, [])

  const onAddList = (e) => {
    e.preventDefault()
    if (commentInput.current.value.length < 1) {
      alert("1글자 이상 입력해주세요")
      return
    }
    const newCommentList = {
      postId: parseInt(id),
      name: "닉네임",
      date: new Date().toLocaleString(),
      commentText,
      id: nanoid(),
      isEdit: false,
    }
    dispatch(addCommentList(newCommentList))
    commentInput.current.value = ""
  }

  const onForwardHandler =() => {
    if(curPage<2) {
      return
    } else {
      setCurPage(curPage-1)
      paginate(curPage-1)
      toggleActive(curPage-1)
    }
  }

  const onBackwardHandler = () => {
    if(curPage<Math.ceil(totalComments / commentPerPage)) {
      setCurPage(curPage+1)
      paginate(curPage+1)
      toggleActive(curPage+1)
    }
  }

  const toggleActive = (number) => {
    setBtnActive(number)
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
        <StPageBtn onClick={onForwardHandler}> {"<"} </StPageBtn>
        <StPageNumBox>
          {
            pageNumber.map((number) => (
              <li key={number} onClick={()=>setCurPage(number)}>
                <StPageBtn value={number} className={number==btnActive?"active":""} onClick={() => {
                  toggleActive(number)
                  paginate(number)
                }}>{number}</StPageBtn>
              </li>
            ))
          }
        </StPageNumBox>
        <StPageBtn onClick={onBackwardHandler}> ></StPageBtn>
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
`

const StPagNation = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
`

const StPageNumBox = styled.ol`
  display: flex;
  list-style: none;
  justify-content: space-between;

`

const StPageBtn = styled.button`
  background-color: transparent;
  padding: 5px 10px;
  font-size: 16px;
  font-weight: 700;
  cursor: pointer;
  border: none;
  color: #fd93a6;
  margin: 0 5px;
  &:hover {
    background-color: #fcafbd;
    color: white;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  }
  
  &.active {
    background-color: #fcafbd;
    color: white;
    box-shadow: rgba(100, 100, 111, 0.3) 0px 7px 29px 0px;
  }
`
export default Pagnation