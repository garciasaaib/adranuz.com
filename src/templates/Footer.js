import React  from "react";
import styled from "styled-components";

const FooterStyled = styled.div`
  margin: auto 0;
  text-align:center;
  right: 0;
  left: 0;
  bottom: 0;
  position: absolute;
  margin-bottom: 2rem;
`

function Footer() {
  return (
    <FooterStyled>
      <small>Design & built by <a href="https://twitter.com/adreanzoe" ><b>@Adreanzoe</b></a></small>
    </FooterStyled>
  )
}

export default Footer