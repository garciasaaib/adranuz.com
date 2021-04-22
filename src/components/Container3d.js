import React from "react";
import styled from "styled-components";

const Container3dStyled = styled.div`
  height: auto;
  width: fit-content;
  padding: 0.3rem;
  margin-bottom: 1.5rem;
  background: rgba(0, 25, 26, 1);
  transform-origin: center;
  transform: translate(-1rem) rotateX(15deg) rotateY(-30deg);
  box-sizing: border-content;
  ::before {
    content: "";
    height: 10rem;
    width: 100%;
    background-color: rgba(0, 25, 26, 1);
    position: absolute;
    top: 100%;
    right: 0;
    transform-origin: top;
    transform: skew(60deg) rotate3d(1, 0, 0, 80deg);
  }
  ::after {
    content: "";
    width: 43rem;
    height: 100%;
    background-color: rgba(0, 25, 26, 1);
    position: absolute;
    transform-origin: left;
    left: 100%;
    top: 0;
    transform: skewY(30deg) rotate3d(0, 1, 0, -86deg);
  }
  .palo {
    width: 1.5rem;
    height: 90%;
    transform: translateX(5px);
    background: linear-gradient(
      90deg,
      rgba(0, 25, 26, 0.7) 0%,
      rgba(48, 190, 140, 1) 27%,
      rgba(48, 190, 140, 1) 27%,
      rgba(0, 25, 26, 1) 73%
    );
    position: absolute;
    left: 50%;
    transform: translateX(30%);
    top: calc(100% + 8px);
    height: 200px;
  }

  :first-child {
  margin-bottom: 0.5rem;

    padding: 0;
    background: none;
    ::after,
    ::before {
      background: none;
    }
    ::before {
      background: rgb(0, 25, 26);
      width: 1.5rem;
      width: 1.5rem;
      height: 66%;
      top: 97.5%;
      left: 39.5%;
      right: 100%;
      border-top-left-radius: 30%;
      border-bottom-right-radius: 50%;
      /* transform: translateY(50%) */
      /* top: calc(100%); */
    }
    palo {
      top: calc(100% + 8px);
      height: 1rem;
    }
  }
`;

const Container3d = ({ children }) => {
  return (
    <Container3dStyled>
      {children}
      <div className="palo"></div>
    </Container3dStyled>
  );
};

export default Container3d;
