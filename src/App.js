import React from 'react'
import styled from 'styled-components'
import { GlobalStyle } from './GlobalStyle'
import Wrapper from './templates/Wrapper'
import Header from './templates/Header'
import Content from './templates/Content'
import Footer from './templates/Footer'



function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Header />
        <Content />
        {/* <Footer /> */}
      </Wrapper>
    </>
  )
}
export default App