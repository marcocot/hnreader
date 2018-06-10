// @flow

import { Navigation } from "react-native-navigation";
import store from "hnreader/src/store";
import { registerScreens } from "./src/Screens";

registerScreens(store);

Navigation.startSingleScreenApp({
  screen: {
    screen: "hnreader.HomeScreen",
    title: "HNReader"
  }
});
