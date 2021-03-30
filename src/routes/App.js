import React from "react";
import { GlobalStyle } from "@styles/GlobalStyle";
import Wrapper from "@templates/Wrapper";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Wrapper />
    </BrowserRouter>
  );
}
export default App;
