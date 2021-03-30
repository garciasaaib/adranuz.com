import React from "react"
import styled from "styled-components"




const NoteStyled = styled.div`
  border-radius: 0.4rem;
  background: var(--color-note1);
  padding: 2rem;
  width: 20rem;
  h3 {
    color: var(--color-text4);
  }
  p {
    color: var(--color-text4);
  }

`
function Note() {
  return (
    <NoteStyled>
        <h3>holo</h3>
        <p><small>Concepts, APIS, DOM and some projects</small></p>
        <button>Let's Go</button>
    </NoteStyled>
  )
}

export default Note