import React  from "react"
import styled from "styled-components"
import Section from "../components/sections/Section"

import ProfilePhoto from "../components/media/Profile"
import SocialMediaContainer from "../components/media/SocialContainer"


const ContentStyled = styled.div`
  margin: auto;
  .align-center {
    margin: auto;
    display: flex;
  }
`

function Content() {
  return (
    <ContentStyled>
      <Section>
        <p><b>Hello, my name is</b></p>
        <h2>Adrian Garcia</h2>
        <h3>I develop on the internet <br/> with JavaScript</h3>
        <p>I’m Mechatronics Engineer by my university, but I found in the web a way to make amazing things with just a computer and a good coffee.</p>
        <button>Contact me</button>
      </Section>
      <Section title="About">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
        <div class="align-center">
          <ProfilePhoto />
        </div>
      </Section>
      <Section title="Projects">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
        
      </Section>
      <Section title="Experience"></Section>
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
      <Section title="Get in Touch" title-center>
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
        <SocialMediaContainer />
      </Section>
    </ContentStyled>
  )
}

export default Content