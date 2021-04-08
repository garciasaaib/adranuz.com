import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Container3d from "@components/Container3d/";
import githubIcon from "@assets/svg/github.svg";

const NavStyled = styled.nav`
  height: 85%;
  transform-origin: bottom right;
  width: auto;
  /* max-width: 70rem; */
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
    justify-content: space-evenly;
    margin-bottom: 5rem;
    padding: 0 0rem;
  }
  li {
    list-style: none;
    padding: 0;
    margin: auto;
    text-align: center;
  }

  .list.table {
    background: linear-gradient(
      146deg,
      rgba(239, 219, 136, 1) 0%,
      rgba(28, 22, 1, 1) 54%
    );
    border: 0.2rem solid rgba(48, 190, 140, 1);
    position: relative;
    padding: 0.5rem;
    padding-bottom: 0;
    padding-right: 0;

    .cuadricula {
      position: absolute;
      top: 0.5rem;
      left: 0.5rem;
      bottom: 0;
      right: 0;
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(5, 1fr);
      background: linear-gradient(
          90deg,
          rgba(255, 237, 163, 1) 0%,
          rgba(255, 243, 205, 1) 25%,
          rgba(255, 237, 163, 1) 50%,
          rgba(255, 243, 205, 1) 75%,
          rgba(255, 237, 163, 1) 90%
        );
      div {
        border: 1px solid darkgray;
        border-bottom: none;
        border-right: none;
      }
    }

    ul {
      border-bottom: none;
      border-right: none;
      padding: 1rem;
      position: relative;
      z-index: 0;

      ::before {
        z-index: -2;
        content: "";
        position: absolute;
      }
    }
    li:nth-child(even) p {
      color: #1e7d60;
    }
    p {
      letter-spacing: 0;
      margin: 0;
      padding: 0;
      color: #cb592d;
      font-size: 2.5rem;
      display: inline;
      font-weight: bold;
      text-shadow: 1px 1px 2px rgba(0, 25, 26, 1);
      :hover {
        filter: contrast(150%) drop-shadow(0px 0px 3px #fefbf1);
      }
    }
  }
`;

const Nav = ({ setOpenModal }) => {
  return (
    <NavStyled>
      <div className="links">
        <Container3d>
          <ul className="list">
            <li>
              <Link to="/me" onClick={() => setOpenModal(true)}>
                RESUME
              </Link>
            </li>
            <li>
              <Link to="/docs" onClick={() => setOpenModal(true)}>
                GET IN TOUCH
              </Link>
            </li>
          </ul>
        </Container3d>

        <Container3d>
          <div className="list table">
            <div className="cuadricula">
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
              <div />
            </div>
            <ul>
              <li>
                <Link to="/me" onClick={() => setOpenModal(true)}>
                  <p>NOTION COPYPASTE NOTES</p>
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setOpenModal(true)}>
                  <p>ARTICLES BY ADRANUZ</p>
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
          </div>
        </Container3d>

        <Container3d>
          <ul className="list">
            <li>
              <Link to="/me" onClick={() => setOpenModal(true)}>
                {githubIcon}
              </Link>
            </li>
            <li>
              <Link to="/me" onClick={() => setOpenModal(true)}>
                Me
              </Link>
            </li>
            <li>
              <Link to="/me" onClick={() => setOpenModal(true)}>
                Me
              </Link>
            </li>
            <li>
              <Link to="/me" onClick={() => setOpenModal(true)}>
                Me
              </Link>
            </li>
            <li>
              <Link to="/me" onClick={() => setOpenModal(true)}>
                Me
              </Link>
            </li>
          </ul>
        </Container3d>
      </div>
    </NavStyled>
  );
};

export default Nav;
