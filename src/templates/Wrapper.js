import React, {useState} from 'react';
import styled from "styled-components"

import Header from "./Header";
import Content from './Content'

const WrapperStyled = styled.div`
  margin: auto;
  /* border: 1px solid teal; */
  /* margin: 3.2rem; */
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