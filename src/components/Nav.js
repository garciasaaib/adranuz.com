import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom"

const NavStyled = styled.nav`
  height: 90%;
  width: 100%;
  max-width: 50rem;
  margin-bottom: 0;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
  justify-items: center;

  .links {
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    /* gap: 2rem; */
    margin-bottom: 10rem;

  }
  ::before {
    content: "";
    width: 1.5rem;
    height: 90%;
    background: linear-gradient(90deg,rgba(0,25,26,.5) 0%,rgba(48,190,140,1) 27%,rgba(48,190,140,1) 27%,rgba(0,25,26,1) 73%);
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .link {
    position: relative;
    margin: 0 auto;
    height: 5rem;
    width: 90%;
    background-color: violet;
    list-style: none;
  }
`;
const Nav = ({setOpenModal}) => {
  return (
    <NavStyled>
      <ul className="links">
        <li className="link">
          <Link to="/me" onClick={() => setOpenModal(true)}>
            Me
          </Link>
        </li>
        <li className="link">
          <Link to="/docs" onClick={() => setOpenModal(true)}>
            Docs
          </Link>
        </li>
        <li className="link">
          <Link to="/projects" onClick={() => setOpenModal(true)}>
            Projects
          </Link>
        </li>
        <li className="link">
          <Link to="/contact" onClick={() => setOpenModal(true)}>
            Get in Touch
          </Link>
        </li>
      </ul>
    </NavStyled>
  );
};

export default Nav;
