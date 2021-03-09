import React, {useState} from 'react';
import styled from "styled-components"

import Header from "@templates/Header";
import Content from '@templates/Content'

const WrapperStyled = styled.div`
  margin: auto;
  overflow-x: hidden;

  
`

function Wrapper() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <WrapperStyled>
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Content menuOpen={menuOpen} />
      {/* <Footer /> */}
    </WrapperStyled>
  )
}

export default Wrapper