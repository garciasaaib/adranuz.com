import React  from "react";
import styled from 'styled-components'

const FooterStyled = styled.div`
  margin: auto 0;
  text-align:center;
`

function Footer() {
  return (
    <FooterStyled>
      <small>Design & built by <a href="#"><b>@Adreanzoe</b></a></small>
    </FooterStyled>
  )
}

export default Footer