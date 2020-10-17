import React from "react"
import styled from "styled-components"


const SocialStyled = styled.div`
  margin: auto;
  text-align: center;
  figure {
    width: 4rem;
    margin: 1rem;
    cursor:pointer;
  }

`

function Social({imgSource, hrefSource}) {
  return (
    <SocialStyled>
      <a href={hrefSource} _blank >
        <figure>
          <picture>
            <img src={imgSource} />
          </picture>
        </figure>
      </a>
    </SocialStyled>
  )
}

export default Social