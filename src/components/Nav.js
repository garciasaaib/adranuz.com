import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import Container3d from "@components/Container3d/";
import ContainerLumined from "@components/ContainerLumined";
import ContainerNeon from "@components/ContainerNeon";
import ContainerMain from "@components/ContainerMain";

import Icon from "@components/Icon";
import githubIcon from "@assets/svg/github-line.svg";
import twitterIcon from "@assets/svg/twitter-line.svg";
import bitcoinIcon from "@assets/svg/bitcoin-line.svg";
import logoIcon from "@assets/icons/main.svg";
// import ellipse from "@assets/svg/ellipse.svg";


const NavStyled = styled.nav`
  /* border: 1px solid red; */
  height: 100%;
  transform-origin: bottom right;
  width: 100%;
  max-width: 560px;
  margin-bottom: 0;
  margin-top: auto;
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  flex-direction: column-reverse;
  justify-items: center;
  align-items: center;
  overflow: hidden;
  .links {
    position: relative;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 10rem;
    margin-top: 1rem;
    padding: 0 0rem;
  }
  li {
    list-style: none;
    padding: 0;
    margin: auto;
    text-align: center;
  }
  p {
    font-size: 3.7rem;
  }
  @media (max-width: 560px) {
    p {
      font-size: 6.7vw;
    }
  }
`;

const Nav = ({ setOpenModal }) => {
  return (
    <NavStyled>
      <div className="links">
        <Container3d>
          <ContainerMain>
            <ul className="list">
              <li className="logoIcon">
                <Icon className="icon" svgIcon={logoIcon}></Icon>
              </li>
              <li>
                <Link to="/me" onClick={() => setOpenModal(true)}>
                  <p>RESUME</p>
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/docs" onClick={() => setOpenModal(true)}>
                  <p class="cursive">Get In<br />Touch</p>
                </Link>
              </li>
            </ul>
          </ContainerMain>
        </Container3d>

        <Container3d>
          <ContainerLumined>
            <ul>
              <li>
                <Link to="/me" onClick={() => setOpenModal(true)}>
                  <p>NOTION COPYPASTE NOTES</p>
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setOpenModal(true)}>
                  <p>ARTICLES BY ME</p>
                </Link>
              </li>
              <li>
                <Link to="/docs" onClick={() => setOpenModal(true)}>
                  <p>BIG PROJECTS</p>
                </Link>
              </li>
              <li>
                <Link to="/docs" onClick={() => setOpenModal(true)}>
                  <p>LITTLE CHALLENGES</p>
                </Link>
              </li>
            </ul>
          </ContainerLumined>
        </Container3d>

        <Container3d>
          <ContainerNeon>
            <ul>
              <li>
                <Link to="/me" onClick={() => setOpenModal(false)}>
                  <Icon className="icon" svgIcon={githubIcon}></Icon>
                </Link>
              </li>
              <li>
                <Link to="/me" onClick={() => setOpenModal(false)}>
                  <Icon className="icon" svgIcon={twitterIcon}></Icon>
                </Link>
              </li>
              <li>
                <Link to="/me" onClick={() => setOpenModal(false)}>
                  <Icon className="icon" svgIcon={bitcoinIcon}></Icon>
                </Link>
              </li>
            </ul>
          </ContainerNeon>
        </Container3d>
      </div>
    </NavStyled>
  );
};

export default Nav;
