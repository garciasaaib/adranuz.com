import React from "react";
import styled from "styled-components";
import { Switch, Route } from "react-router-dom";

import Home from '@pages/Home';
import Me from "@pages/Me";
import Docs from "@pages/Docs";
import Projects from "@pages/Projects";
import Contact from "@pages/Contact";
import NotFound from "@pages/NotFound";

const ContentStyled = styled.div`
  margin: auto;

  b {
    margin-bottom: 0;
  }

`


function Content() {
  return (
    <ContentStyled>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/me" component={Me} />
        <Route exact path="/docs" component={Docs} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/contact" component={Contact} />
        <Route component={NotFound}/>
      </Switch>
    </ContentStyled>
  );
}

export default Content