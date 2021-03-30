import React from "react"
import styled from "styled-components"
import img from "@assets/img/profile.png"


const ProfilePhotoStyled = styled.div`
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

function ProfilePhoto() {
  return (
    <ProfilePhotoStyled>
      <figure>
        <picture>
          <img src={img} />
        </picture>
        
      </figure>
    </ProfilePhotoStyled>
  )
}

export default ProfilePhoto