import React from "react";
import styled from "styled-components";

const ButtonStyled = styled.button`
  padding: 0;
  display: flex;
  flex-direction:column;
  border:none;
  padding: 0.5rem;
  border-radius: 50%;
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
      <img src={image} alt={name} />
    </ButtonStyled>
  );
};
export default Button;
