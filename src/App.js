// @flow

import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";
import Theme from "hnreader/src/theme";
import StoriesList from "hnreader/src/components/StoriesList";

const AppContainer = styled.View`
  flex: 1;
  margin-top: 35;
`;

class App extends Component<void> {
  render() {
    return (
      <AppContainer>
        <ThemeProvider theme={Theme}>
          <StoriesList />
        </ThemeProvider>
      </AppContainer>
    );
  }
}

export default App;
