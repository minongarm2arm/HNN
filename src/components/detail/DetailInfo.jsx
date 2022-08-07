import React, {Fragment} from "react";
import styled from "styled-components";
import placeholder from "../../src_assets/placeholder.png";
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getPost} from "../../redux/modules/detail";

const DetailInfo = () => {

  const {id} = useParams()
  const dispatch = useDispatch()
  const postData = useSelector((state => state.detail))
  useEffect(()=> {
    dispatch(getPost(id))
  },[])

  return (
    <>
      <StImageBox>
      </StImageBox>
      <StImageInfo>
        <StInfoLeft>
          {postData.map((data)=> (
            <Fragment key={data.id}>
              <p>{data.food}</p>
              <p>{data.restaurant}</p>
              <p>{data.location}</p>
            </Fragment>
          ))}
        </StInfoLeft>
        <StInfoRight>
          <p>userName</p>
          <p><span>❤️ 59</span><span>■25</span></p>
        </StInfoRight>
      </StImageInfo>
      {postData.map((data)=> (
        <StImageDesc key={data.id}>
          {data.review}
        </StImageDesc>
      ))}
    </>
  )
}

const StImageBox = styled.div`
  background-image: url(${placeholder});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 100%;
  padding-bottom: 70%;
`

const StImageInfo = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;
`

const StInfoLeft = styled.div`
  
  & p {
    padding: 3px 0;
    font-size: 18px;
    font-weight: bold;
  }
`
const StInfoRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  & p {
    padding: 3px 0 ;
  }
`
const StImageDesc = styled.div`
  margin-top: 30px;
  flex: 1;
  overflow: auto;
`


export default DetailInfo