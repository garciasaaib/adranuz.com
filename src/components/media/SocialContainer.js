import React from "react"
import styled from "styled-components"
import SocialMedia from "../media/Social"

import twitterIcon from "../../assets/svg/twitter.svg"
import linkedinIcon from "../../assets/svg/linkedin.svg"
import whatsappIcon from "../../assets/svg/whatsapp.svg"
import skypeIcon from "../../assets/svg/skype.svg"
import youtubeIcon from "../../assets/svg/youtube.svg"


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
      <twitterIcon />
      <SocialMedia imgSource={twitterIcon} hrefSource={mediaUrl.twitter} />
      <SocialMedia imgSource={linkedinIcon} hrefSource={mediaUrl.linkedin} />
      <SocialMedia imgSource={whatsappIcon} hrefSource={mediaUrl.whatsapp} />
      <SocialMedia imgSource={skypeIcon} hrefSource={mediaUrl.skype} />
      <SocialMedia imgSource={youtubeIcon} hrefSource={mediaUrl.youtube} />
    </SocialContainerStyled>
  )
}

export default SocialContainer