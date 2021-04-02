import React from 'react';
import styled from "styled-components"

import Footer from "@templates/Footer";
import Main from "@templates/Main";

import imgStars from "@assets/img/stars.png";
import imgClouds from "@assets/img/clouds.png";
import { movingStars, movingClouds } from "@styles/animations"

const WrapperStyled = styled.div`
  margin: auto;
  overflow-x: hidden;
  background-color: var(--color-bg-1);
  background-image: url(${imgStars});
  animation: ${movingStars} 1000s linear infinite;
  width: 100%;
  height: 100vh;
  position: relative;
  z-index: 0;
  ::before {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: scale(-1);
    background: 
      linear-gradient(364deg, rgba(0,25,26,0) 20%, rgba(48,190,140,1) 120%), 
      url(${imgStars}
      );
  }
  ::after {
    content: '';
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    transform: scale(-1);
    background: 
      /* linear-gradient(364deg, rgba(0,25,26,0) 20%, rgba(48,190,140,1) 120%),  */
      url(${imgClouds}
    );
    z-index: -1;
  }
`

const Wrapper = () => (
    <WrapperStyled>
      <Main />
      <Footer />
    </WrapperStyled>
  )


export default Wrapper