import React  from "react";
import styled from 'styled-components'

const HeaderStyled = styled.div`
  margin: auto;
`

function Wrapper({children}) {
  return (
    <HeaderStyled>
      <h1>Este es un  header</h1>
    </HeaderStyled>
  )
}

export default Wrapper