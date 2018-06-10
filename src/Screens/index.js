// @flow

import React from "react";
import { Navigation } from "react-native-navigation";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";
import type { StateType } from "hnreader/src/store/reducers";
import theme from "hnreader/src/theme";
import HomeScreen from "./HomeScreen";
import ArticleScreen from "./ArticleScreen";

const CustomProvider = ({ store, children }) => (
  <Provider store={store}>
    <ThemeProvider theme={theme}>{children}</ThemeProvider>
  </Provider>
);

export function registerScreens(store: StateType) {
  Navigation.registerComponent("hnreader.HomeScreen", () => HomeScreen, store, CustomProvider);
  Navigation.registerComponent("hnreader.ArticleScreen", () => ArticleScreen, store, CustomProvider);
}
