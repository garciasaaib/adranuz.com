import React from "react";
import styled from 'styled-components'

const WrapperStyled = styled.div`
  margin: auto;
  /* border: 1px solid teal; */
  margin: 3.2rem;
  overflow-x: hidden;

  
`

function Wrapper({children}) {
  return (
    <WrapperStyled>
      {children}
    </WrapperStyled>
  )
}

export default Wrapper