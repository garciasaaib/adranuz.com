import styled, { keyframes } from "styled-components"

export const movingStars = keyframes`
  from {
    background-position: 200% 200%;
    };
  to {
    background-position: 0% 0%;
    };
`;
export const movingClouds = keyframes`
  from {
    background-position-x: 200%;
    
  };
  to {
    background-position-x: 0%;
  };
`;