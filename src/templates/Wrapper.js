import React from 'react';
import styled from "styled-components"

import Footer from "@templates/Footer";
import Nav from "@templates/Nav"

const WrapperStyled = styled.div`
  margin: auto;
  overflow-x: hidden;
  background-color: var(--color-bg-1);
  width: 100%;
  height: 100vh;
  position: relative;
  main {
    width: 100%;
    height: 100%;
  }
  `

const Wrapper = () => {
  return (
    <WrapperStyled>
      <main>
        <Nav></Nav>
      </main>
      <Footer />
    </WrapperStyled>
  )
}

export default Wrapper