import React from "react"
import styled from "styled-components"


const SocialStyled = styled.div`
  width: 100%;

  /* margin: auto; */
  text-align: center;
  figure {
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
        <figure>
          <picture>
            <img src={image} alt={`${name} icon`}/>
          </picture>
        </figure>
      </a>
    </SocialStyled>
  )
}


export default Social