import React, {useEffect, useState} from "react";
import styled from "styled-components";
import CommonHeader from "../components/CommonHeader";
import Comment from "../components/detail/Comment";
import Pagnation from "../components/detail/Pagenation";
import DetailInfo from "../components/detail/DetailInfo";
import {useDispatch, useSelector} from "react-redux";
import {getCommentList} from "../redux/modules/comment";
import {useParams} from "react-router-dom";
import axios from "axios";
const Detail = () => {
  const {id} = useParams()
  const dispatch = useDispatch()
  const [currentPage, setCurrentPage] = useState(1)
  const [commentPerPage, setPostPerPage] = useState(6);

  let commentList = useSelector((state) => state.comment)
  const indexOfLast = currentPage * commentPerPage
  const indexOfFirst = indexOfLast - commentPerPage
  let commentLists = commentList.slice(indexOfFirst, indexOfLast)

  useEffect(() => {
    dispatch(getCommentList(id))
  }, [])


  return (
    <>
      <CommonHeader/>
      <StDetail>
        <StLeftContainer>
         <DetailInfo/>
        </StLeftContainer>
        <StRightContainer>
          <Comment commentLists={commentLists}/>
          <Pagnation commentPerPage={commentPerPage}
                     totalComments={commentList.length}
                     paginate={setCurrentPage}/>
        </StRightContainer>
      </StDetail>
    </>
  )
}

const StDetail = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 110px);
  padding-bottom: 30px;
`

const StLeftContainer = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
`



const StRightContainer = styled.div`
  width: 50%;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default Detail

