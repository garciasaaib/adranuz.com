import React from "react"
import styled from "styled-components"
import SocialMedia from "./Social"

import twitterIcon from "../../assets/svg/twitter.svg"
import linkedinIcon from "../../assets/svg/linkedin.svg"
import whatsappIcon from "../../assets/svg/whatsapp.svg"
import skypeIcon from "../../assets/svg/skype.svg"
import githubIcon from "../../assets/svg/github.svg"


const SocialContainerStyled = styled.div`
  display: flex;
  max-width: 5rem;
  margin: auto;
  justify-content: center;

`

function SocialContainer() {
  const mediaUrl= {
    twitter: "http//:www.twitter.com/adranuz",
    linkedin: "http//:www.twitter.com/adranuz",
    whatsapp: "http//:www.twitter.com/adranuz",
    skype: "http//:www.twitter.com/adranuz",
    youtube: "http//:www.twitter.com/adranuz",
  }

  
  return (
    <SocialContainerStyled>
      <SocialMedia imgSource={twitterIcon} hrefSource={mediaUrl.twitter} />
      <SocialMedia imgSource={linkedinIcon} hrefSource={mediaUrl.linkedin} />
      <SocialMedia imgSource={whatsappIcon} hrefSource={mediaUrl.whatsapp} />
      <SocialMedia imgSource={skypeIcon} hrefSource={mediaUrl.skype} />
      <SocialMedia imgSource={githubIcon} hrefSource={mediaUrl.github} />
    </SocialContainerStyled>
  )
}

export default SocialContainer