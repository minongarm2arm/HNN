import React from "react";
import styled from "styled-components";

const StLayout = styled.div`
  max-width: 1200px;
  min-height: 100vh;
  padding: 20px;
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