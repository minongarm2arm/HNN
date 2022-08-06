import styled from "styled-components";

const CommonHeader = () => {
  return (
    <StCommonHeader>
      <StLeftContainer>
        <StLogo>
          🐷
        </StLogo>
      </StLeftContainer>
      <StRightContainer>
        <StNavContainer>
          <StNavUl>
            <StNavLi>My Page</StNavLi>
            <StNavLi>Posting</StNavLi>
            <StNavLi>Logout</StNavLi>
          </StNavUl>
        </StNavContainer>
      </StRightContainer>
    </StCommonHeader>
  )
}

const StCommonHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`

const StLeftContainer = styled.div``
const StRightContainer = styled.div``


const StNavContainer = styled.nav`
  & > ul {
    display: flex;
    list-style: none;
    & > li {
      padding: 10px 20px;
      cursor: pointer;
    }
  }
`

const StNavUl = styled.ul`
  display: flex;
  list-style: none;
`

const StNavLi = styled.li`
  padding: 10px 20px;
  cursor: pointer;
`

const StLogo = styled.div`
  font-size: 30px;
`

export default CommonHeader