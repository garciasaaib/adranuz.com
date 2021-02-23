import React, {useContext}  from "react"
import styled from "styled-components"
import Section from "../components/sections/Section"
import {MenuContext} from '../contexts/MenuContext'

const ContentStyled = styled.div`
  filter: ${props => props.isBlurred && 'blur(10px)'};
  margin: auto;
  /* filter: blur(4px); */
  b {
    margin-bottom: 0;
  }
`

function Content() {
  const {menuOpen: isBlurred} = useContext(MenuContext)
  console.log({isBlurred})
  return (
    <ContentStyled isBlurred={isBlurred}>
      <Section>
        <p><b>Hello, my name is</b></p>
        <h2>Adrian Garcia</h2>
        <h3>I Develop on the Internet <br/> with JavaScript</h3>
        <p>I’m Mechatronics Engineer by my university, but I found in the web a way to make amazing things with just a computer and a good coffee.</p>
        <button>Contact me</button>
      </Section>
      <Section title="About">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
        <div>Tecnologies</div>
      </Section>
      <Section title="Projects">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
        
      </Section>
      <Section title="Experience"></Section>
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
      <Section title="Get in Touch" align-center>
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
      </Section>
    </ContentStyled>
  )
}

export default Content