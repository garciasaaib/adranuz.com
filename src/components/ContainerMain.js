import React from "react";
import styled from "styled-components";
import Icon from "@components/Icon";
import ellipse from "@assets/svg/ellipse.svg";

const ContainerMainStyled = styled.div`
  /* background-color: red; */
  height: 270px;
  margin-left: auto;
  
  padding: 0;
  /* padding-right: 8px; */
  .icon {
    /* margin: 1rem; */
    /* position: absolute; */
    fill: rgba(0, 25, 26, 1);
    stroke: #30be8c;
    stroke-width: 1;
    /* box-shadow: 2px 2px 100px white; */
    bottom: 2px;
    top: 2px;
    height: inherit;
    filter: drop-shadow(31px 17px 0px rgb(0, 25, 26));
    /* left: 0; */
    /* right: 0; */
    /* width: 100%; */
    ::before {
      content: "";
      width: 20px;
      height: 20px;
      filter: drop-shadow(31px 17px 0px rgb(0, 25, 26));
    }
  }
  .list {
    position: absolute;
    box-sizing: border-box;
    bottom: 10%;
    right: 5%;
    left: 0;
    width: 180px;
    text-align: center;
    margin: auto auto;
    padding-bottom: 0;

    p.cursive {
      margin-top: 10px;
      font-family: "Dancing Script", cursive;
      font-weight: bold;
    }
    p {
      display: inline;
      color: #30be8c;
      text-shadow: 3px 3px 2px #558abb;
      margin: 0;
      font-family: "Train One", "Texturina", serif;
      font-size: 2rem;
      :hover {
        text-shadow: 3px 3px 3px #558abb;
        filter: contrast(150%);
      }
    }
    hr {
      color: #30be8c;
      box-shadow: 3px 3px 2px #558abb;
      margin: 1rem;
      margin-left: 3rem;
      margin-right: 3rem;
    }
    li .icon {
      width: 94%;
      fill: #30be8c;
      /* -webkit-filter: contrast(100%) drop-shadow(4px 4px 3px #30be8c); */
      filter: contrast(120%) drop-shadow(3px 3px 2px #558abb);
      margin-bottom: -8%;
      :hover {
        filter: contrast(150%) drop-shadow(4px 4px 3px #558abb);
      }
    }
  }
`;
const ContainerMain = ({ children }) => (
  <ContainerMainStyled>
    <Icon className="icon" svgIcon={ellipse}></Icon>
    {children}
  </ContainerMainStyled>
);

export default ContainerMain;
