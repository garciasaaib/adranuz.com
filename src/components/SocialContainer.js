import React, {useState} from "react"
import styled from "styled-components"

import SocialMedia from "@components/Social"
import Button from "@components/Button";


const SocialContainerStyled = styled.div`
  gap: 0.2rem;
  display: flex;
  flex-direction: column-reverse;
`

const SocialContainer = ({data, button}) => {
  const [open, setOpen] = useState(false)
  
  return (
    <SocialContainerStyled onClick={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
      <Button {...button} />
      {
        open && data.map((data, id) => <SocialMedia key={id} {...data} />)
      }
    </SocialContainerStyled>
  )
}

export default SocialContainer