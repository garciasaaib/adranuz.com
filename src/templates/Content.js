import React  from "react"
import styled from "styled-components"
import Section from "../components/sections/Section"

const ContentStyled = styled.div`
  margin: auto;
  background-color: pink;
`

function Content() {
  return (
    <ContentStyled>
      <Section />

    </ContentStyled>
  )
}

export default Content