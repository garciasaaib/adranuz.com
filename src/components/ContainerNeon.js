import React from "react";
import styled from "styled-components";
const ContainerNeonStyled = styled.div`
  border: 2px solid rgba(203, 89, 45, 1);
  box-shadow: inset 0rem 0rem 13px #e96d4f;
  :hover {
    border: 2px solid #f6632b;
  }
  p {
    text-align: center;
    /* margin-top: 1rem; */
    margin-bottom: -1rem;
    font-weight: bold;
    letter-spacing: 0;
    color: #cb592d;
    font-size: 1rem;
    font-weight: bold;
    text-shadow: 2px 2px 1px rgb(114 26 26);
    z-index: 2;
    filter: drop-shadow(0px 0px 3px #e96d4f);
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    li {
      background: radial-gradient(
        circle,
        rgba(203, 89, 45, 0.6) 0%,
        rgba(0, 25, 26, 0) 75%
      );
      padding: inherit;
      :hover {
        background: radial-gradient(
          circle,
          rgba(203, 89, 45, 0.6) 0%,
          rgba(0, 25, 26, 0) 80%
        );
      }

      .icon {
        margin: 3rem;
        width:70px;
        fill: #cb592d;
        filter: contrast(100%) drop-shadow(4px 4px 3px #bc1818);
        :hover {
          filter: contrast(120%) drop-shadow(4px 4px 3px red);
          ~ li {
            background: red;
          }
        }
        @media (max-width: 560px) {
        margin: 5vw;
        width: 13vw;
        }
      }
    }
  }
`;
const ContainerNeon = ({ children }) => (
  <ContainerNeonStyled>
    {/* <p>STATUS</p> */}
    {children}
  </ContainerNeonStyled>
);

export default ContainerNeon;
