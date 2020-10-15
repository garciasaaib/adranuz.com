import React from "react"
import styled from 'styled-components'


const ContentStyled = styled.div`
  margin: auto;
  background-color: pink;
`

function Content() {
  return (
    <ContentStyled>
      <h1>Este es el content</h1>
    </ContentStyled>
  )
}

export default Content