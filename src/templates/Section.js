import React from "react"
import styled from 'styled-components'


const SectionStyled = styled.div`
  margin: auto;
  border: 1px solid rgba(0,0,0,.2);
  margin: 3.2rem;
`

function Section({children, title}) {
  return (
    <SectionStyled>
      {title &&
        <h2>{title}</h2>
      }
      {children}
    </SectionStyled>
  )
}

export default Section