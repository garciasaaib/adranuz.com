import React from 'react';
import styled from 'styled-components';

const NavStyled = styled.nav`
  height: 90%;
  width: 100%;
  max-width: 50rem;
  background-color: red;
  margin-bottom: 0;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  
`
const Nav = () => {
  return (
    <NavStyled>
      holo
    </NavStyled>
  )
}

export default Nav;