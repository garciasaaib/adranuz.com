import React  from "react";
import styled from 'styled-components'

const WrapperStyled = styled.div`
  margin: auto;
`

function Wrapper({children}) {
  return (
    <WrapperStyled>
      {children}
      <h1>Hola que hace</h1>
    </WrapperStyled>
  )
}

export default Wrapper