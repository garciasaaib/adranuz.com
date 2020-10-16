import React from "react"
import styled from 'styled-components'


const SectionStyled = styled.div`
  margin: auto;
  border: 1px solid rgba(0,0,0,.2);
`

function Section({children, title}) {
  return (
    <SectionStyled>
      <h2>{title}</h2>
      {children}
    </SectionStyled>
  )
}

export default Section