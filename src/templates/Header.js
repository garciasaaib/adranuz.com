import React from "react";
import styled from "styled-components";

// IMAGES
import logo from "../assets/icons/main.svg"
import burger from "../assets/icons/burguer.svg"
import ex from "../assets/icons/close.svg"
import arrow from "../assets/icons/arrow.svg"

const HeaderStyled = styled.div`
  margin: 3.2rem;
  display: flex;
  justify-content: space-between;
  margin-bottom:4.6rem;
  position: relative;

  img {
    height: 5rem;
    width: 5rem;
    margin: 0;
  }
  
  .NavList {
    position: fixed;
    top: 8vh;
    left: 0;
    right: 0;
    padding: 4rem;
    text-align: right;
    z-index: 1;

    & ul {
      list-style:none;

      & li {
        margin: 4rem 0;
        text-align: right;
        & a {
          color: white;
          text-decoration:none;
          font-size: 3.6rem;
          
          & .arrow {
            width: 2.2rem;
            height: 2.2rem;
          }
        }
      }
    }
  }
`

function Header({menuOpen, setMenuOpen}) {

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  } 
  return (
    <HeaderStyled>
      <div className="Logo">
        <img src={logo} />
      </div>
      <div className="Nav">
        <img src={menuOpen ? ex : burger} onClick={toggleMenu}/>
        {menuOpen && 
          <div className="NavList">
            <ul>
              <li><a href="#">Home <img className="arrow" src={arrow} /></a></li>
              <li><a href="#">About <img className="arrow" src={arrow} /></a></li>
              <li><a href="#">Projects <img className="arrow" src={arrow} /></a></li>
              <li><a href="#">Experience <img className="arrow" src={arrow} /></a></li>
              <li><a href="#">Get in Touch <img className="arrow" src={arrow} /></a></li>
            </ul>
            <button>Resume</button>
          </div>
        }
      </div>
    </HeaderStyled>
  )
}

export default Header