import React from "react"
import styled from "styled-components"
import Icon from "@components/Icon"


const SocialStyled = styled.div`

  /* margin: auto; */
  text-align: center;
  a {
    width: 4rem;
    height: 5.1rem;
    cursor:pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }
  :hover {
    background-color: var(--color-hover);
    border-radius: 50%;
  }
`

const Social = ({name, image, url}) => {
  return (
    <SocialStyled>
      <a href={url} target="_blank" >
        <Icon svgIcon={image}></Icon>
      </a>
    </SocialStyled>
  )
}


export default Social