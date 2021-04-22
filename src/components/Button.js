import React from "react";
import styled from "styled-components";
import Icon from "@components/Icon";

const ButtonStyled = styled.button`
  padding: 0;
  display: flex;
  flex-direction:column;
  border:none;
  padding: 0.5rem;
  border-radius: 50%;
  width: 5rem;
  height: 5rem;
  b {
    margin: auto;
  }
  img {
    max-width: 4rem;
  }
`;

const Button = ({image, name}) => {
  return (
    <ButtonStyled>
      <Icon svgIcon={image}></Icon>
    </ButtonStyled>
  );
};
export default Button;
