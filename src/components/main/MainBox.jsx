import * as React from "react";
import styled from "styled-components";
import { useState, useEffect } from "react";
import axios from "axios";
import placeholder from "../../src_assets/placeholder.png";
import { useNavigate } from "react-router-dom";
// import ReactDOM from 'react-dom/client';
// import createRoot from 'react-dom/client';
// import { useInView } from "react-intersection-observer";

const MainBox = () => {
  
  // const [ref, inView] =  useInView();
  // const [page, setPage] = useState();
  // const [loading, setLoading] = useState(false);
  // const [item, setItems] = useState([]);

  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [nickName, setNickName] = useState("")



  const user = localStorage.getItem("user").replace(/\"/gi, "")

  const getNickName = () => {
    axios.get(`http://localhost:3001/users?email=${user}`)
      .then((res) => {
        return setNickName(res.data[0].nick)
      })
    }
    
    useEffect(() => {
      getNickName()
    },[])

  const fetchPosts = async () => {
    const {data} = await axios.get('http://try-eat.herokuapp.com/posts');
    setPosts(data);
  };

//   const fetchPosts = useCallback(async () => {
//     setLoading(true)
//     await axios.get(`${'http://try-eat.herokuapp.com/posts'}/page=${page}`).then((res) => {
//       setPosts(prevState => [...prevState, res])
//     })
//     setLoading(false)
//   }, [page])
// console.log(fetchPosts)

  // const getItems = (async () => {
  //   setLoading(true)
  //   await axios.get(`${'http://try-eat.herokuapp.com/posts'}/page=${page}`).then((res) => {
  //     setItems(prevState => [...prevState, res])
  //   })
  //   setLoading(false)
  // }, [page])
  
  // useEffect(() => {
  //   getItems()
  // }, [getItems]);

  // useEffect(() => {
  //   // 사용자가 마지막 요소를 보고 있고, 로딩 중이 아니라면
  //   if (inView && !loading) {
  //     setPage(prevState => prevState + 1)
  //   }
  // }, [inView, loading]);

  useEffect(() => {
    fetchPosts()
  }, []);


//   <Virtuoso
//   style={{ height: '400px' }}
//   totalCount={200}
//   itemContent={index => <div>Item {index}</div>}
// />
  

return (
  <>
    <MainBoxContainer>
    {/* <Virtuoso
      style={{ height: '400px' }}
      totalCount={200}
      itemContent={index => 
       */}
        {posts?.map((post, idx) => (
            <MainBoxLayout key={post.id} onClick={()=> {
              navigate(`/detail/${post.id}`);
            }}>
              <StMainBox>
                <StPostImg>
                  <img src={post.imgFile} alt='이미지 없어용' />
                </StPostImg>
                <StPostHover>
                    <div className="hoverText">
                      <p>음식명 : {post.food}</p>
                      <p>가게명 : {post.restaurant}</p>
                      <p>가게 위치: {post.location}</p>
                    </div>
                  </StPostHover>
              </StMainBox>
              <p>{post.name}</p>  
            </MainBoxLayout>
        )).reverse()}

      {/* }/> */}
    </MainBoxContainer>
  </>
  )
  
}

// ReactDOM.root.render(<MainBox />, document.getElementById('root'))


const MainBoxContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const MainBoxLayout = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 50px;
  width: 33%;
  cursor: pointer;

  & > p {
    /* flex: 1 1 100%; */
    margin-top: 7px;
    width: 220px;
  }
`;

const StMainBox = styled.div`
  width: 220px;
  height: 200px;
  border-radius: 30px;
  position: relative;
  overflow: hidden;
`;


const StPostImg = styled.div`
  background-image: url(${placeholder});
  background-size: cover;
  background-position: center;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`


const StPostHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(255,255,255,0.8);
  font-weight: 700;
  font-size: 15px;
  
  &:hover {
    opacity: 1;
  }
  & .hoverText {
    padding: 30px;
    & p {
      margin: 10px 0;
    }
  }
`

export default MainBox;