// @flow

import React from "react";
import { iconsMap } from "hnreader/src/icons";
import StoriesList from "hnreader/src/components/StoriesList";

type PropsType = $Exact<{
  navigator: any
}>;

class HomeScreen extends React.PureComponent<PropsType> {
  onPress = (item: ItemType) => {
    this.props.navigator.showModal({
      screen: "hnreader.ArticleScreen",
      passProps: {
        item
      },
      backButtonHidden: true,
      navigatorButtons: {
        leftButtons: [
          {
            id: "close",
            icon: iconsMap["ios-close"]
          }
        ]
      }
    });
  };

  render() {
    return <StoriesList onPress={this.onPress} />;
  }
}

export default HomeScreen;
