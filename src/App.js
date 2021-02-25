import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './styles/GlobalStyle'
import Wrapper from './templates/Wrapper'



function App() {
  return (
    <React.StrictMode>
      <GlobalStyle />
      <Wrapper/>
    </React.StrictMode>
  )
}
export default App