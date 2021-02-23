import React, {useState} from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import Wrapper from './templates/Wrapper'
import Header from './templates/Header'
import Content from './templates/Content'
import Footer from './templates/Footer'
import {MenuContext} from './contexts/MenuContext'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <MenuContext.Provider value={{menuOpen, setMenuOpen}}>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Content />
        {/* <Footer /> */}
      </Wrapper>
    </MenuContext.Provider>
  )
}
export default App