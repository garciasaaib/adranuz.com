import React from "react"
import styled from "styled-components"


import Section from "../components/sections/Section"

import ProfilePhoto from "../components/media/Profile"
import SocialMediaContainer from "../components/media/SocialContainer"
import NotesContainer from "../components/media/NotesContainer"

const ContentStyled = styled.div`
  margin: auto;
<<<<<<< HEAD
  /* filter: blur(4px); */
=======
  filter: ${({menuOpen}) => menuOpen ? 'blur(4px);' : 'none;'};
>>>>>>> d0f8279427684ce9562122d51bbcf5470635b2c4
  b {
    margin-bottom: 0;
  }

`

<<<<<<< HEAD
function Content() {
=======
function Content({menuOpen}) {
>>>>>>> d0f8279427684ce9562122d51bbcf5470635b2c4
  
  return (
    <ContentStyled menuOpen={menuOpen}>
      <Section>
        <p><b>Hello, my name is</b></p>
        <h2>Adrian Garcia</h2>
        <h3>I Develop on the Internet <br/> with JavaScript</h3>
        <p>I’m Mechatronics Engineer by my university, but I found in the web a way to make amazing things with just a computer and a good coffee.</p>
        <button>Contact me</button>
      </Section>
      
      <Section title="About">
        <p>Hello, I’m Adrian Garcia, Software developer based in Mexico.
        <br />
        <br />
        I really enjoy build things that live on the internet, such as websites, applications, or anything that someone with Internet and a device can use or visit.</p>
        <div className="align-center">
          <ProfilePhoto />
        </div>
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
      </Section>
      
      <Section title="Docs & retakes">
        <p>I ussually use the same code in different projects because I spent time searching how to do a thing, and when I found how to do it I save it in my favorite notes app <b>Notion.so</b>. Let's check some of them to use them.</p>
        <NotesContainer />

      </Section>
      
      <Section title="Projects">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
      </Section>
      
      <Section title="Experience">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
      </Section>
      
      
      <Section title="Get in Touch" titlecenter="true">
        <p>My main area of experience is beeing a Front-End developer using languages, frameworks and other tools as:</p>
        <SocialMediaContainer />
      </Section>
    </ContentStyled>
  )
}

export default Content