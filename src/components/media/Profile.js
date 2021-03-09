import React from "react"
import styled from "styled-components"
import img from "@assets/img/profile.png"


const ProfileStyled = styled.div`
  margin: auto;
  text-align: center;
  figure {
    margin-right: 2rem;
    max-width:35rem;
    overflow: hidden;
    border-radius: 4px;
    border: 4px solid var(--color-primary);
  }
  figure::before {
  }

`

function Profile() {
  return (
    <ProfileStyled>
      <figure>
        <picture>
          <img src={img} />
        </picture>
        
      </figure>
    </ProfileStyled>
  )
}

export default Profile