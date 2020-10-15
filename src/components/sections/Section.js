import React from "react"
import styled from 'styled-components'


const SectionStyled = styled.div`
  margin: auto;
  border: 1px solid white;
`

function Section() {
  return (
    <SectionStyled>
      <h1>Ests es una seccion</h1>
    </SectionStyled>
  )
}

export default Section