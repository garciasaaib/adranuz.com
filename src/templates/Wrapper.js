<<<<<<< HEAD
import Content from './Content'

const WrapperStyled = styled.div`
  margin: auto;
  /* border: 1px solid teal; */
  /* margin: 3.2rem; */
=======
import React, {useState} from 'react';
import styled from "styled-components"

import Header from "@templates/Header";
import Content from '@templates/Content'

const WrapperStyled = styled.div`
  margin: auto;
>>>>>>> 8d6c81cc62eef579f0aabe8f7c388c7de34a4e30
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