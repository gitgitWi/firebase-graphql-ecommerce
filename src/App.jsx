import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import styled from "styled-components";

import "./default.scss";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

const StyledAppWrapper = styled.div`
  height: 100%;
  width: 100%;
`;

const StyledMain = styled.main`
  height: 100%;
  max-width: 1450px;
  width: 100%;
  padding: 0 10px;
  margin: 0 auto;
`;

export default function App() {
  return (
    <StyledAppWrapper>
      <Header />
      <StyledMain>
        <Router>
          <Switch>
            <Route path="/" component={Homepage} />
          </Switch>
        </Router>
      </StyledMain>
    </StyledAppWrapper>
  );
}
