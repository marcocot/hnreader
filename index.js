// @flow

import React from "react";
import { AppRegistry } from "react-native";
import { Provider } from "react-redux";
import store from "hnreader/src/store";
import App from "hnreader/src/App";

class RootComponent extends React.PureComponent<void> {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}

AppRegistry.registerComponent("hnreader", () => RootComponent);
