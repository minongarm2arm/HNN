import React from "react";
import styled from "styled-components";

const StLayout = styled.div`
  max-width: 945px;
  min-height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`

const Layout = (props) => {
  return (
    <StLayout>
      {props.children}
    </StLayout>
  )
}

export default Layout