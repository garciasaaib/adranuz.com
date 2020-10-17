import React from "react"
import styled from 'styled-components'


const ProfileStyled = styled.div`
  margin: auto;
  background-color: pink;
`

function Profile() {
  return (
    <ProfileStyled>
      <h1>Componente de imagen chida</h1>
    </ProfileStyled>
  )
}

export default Profile