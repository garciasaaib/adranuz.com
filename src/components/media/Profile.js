import React from "react"
import styled from "styled-components"
<<<<<<< HEAD
import img from "../../assets/img/profile.png"
=======
import img from "@assets/img/profile.png"
>>>>>>> 8d6c81cc62eef579f0aabe8f7c388c7de34a4e30


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