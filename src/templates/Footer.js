import React  from "react";
import styled from "styled-components";
import SocialLogic from "@components/SocialLogic"

const FooterStyled = styled.footer`
  margin: auto 0;
  position: absolute;
  text-align:center;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
  padding: 1rem;
  & > div {
    display: flex;
    gap: 1rem;
  }
  & small {
    margin: 0.5rem;
  }
`

const Footer = () => (
    <FooterStyled>
      <div>
        <SocialLogic />
      </div>

      <small>Design & built by <a href="https://twitter.com/adreanzoe" target="_blank"><b>@Adreanzoe @Adranuz</b></a></small>
    </FooterStyled>
  )


export default Footer