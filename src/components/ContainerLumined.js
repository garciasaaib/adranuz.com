import React from "react";
import styled from "styled-components";
const ContainerLuminedStyled = styled.div`
    background: linear-gradient(
      146deg,
      rgba(239, 219, 136, 1) 0%,
      rgba(28, 22, 1, 1) 54%
    );
    border: 0.2rem solid rgb(191, 191, 191);
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
        border: 1px solid rgb(146 131 75);
        border-bottom: none;
        border-right: none;
      }
    }

    ul {
      border-bottom: none;
      border-right: none;
      padding: 1rem 0.3rem;
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
      text-shadow: 1px 1px 2px rgb(60 170 182);
    }
    p {
      letter-spacing: 0;
      margin: 0;
      padding: 0;
      color: #cb592d;
      font-size: 2.5rem;
      display: inline;
      font-weight: bold;
      text-shadow: 1px 1px 1px  rgb(114 26 26);
      :hover {
        filter: contrast(150%) drop-shadow(0px 0px 3px #fefbf1);
      }
    }
`;
const ContainerLumined = ({ children }) => {
  return (
    <ContainerLuminedStyled>
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
      {children}
    </ContainerLuminedStyled>
  );
};

export default ContainerLumined;
