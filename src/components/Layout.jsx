import React from "react";
import styled from "styled-components";

const StLayout = styled.div`
  max-width: 840px;
  min-height: 100vh;
  padding: 0 20px;
  margin: 0 auto;
`

const Layout = (props) => {
  return (
    <StLayout>
      {props.children}
    </StLayout>
  )
}

export default Layout