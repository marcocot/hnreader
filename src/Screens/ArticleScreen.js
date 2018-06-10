// @flow

import React from "react";
import { WebView } from "react-native";

type PropsType = $Exact<{
  item: ItemType,
  navigator: any
}>;

class ArticleScreen extends React.PureComponent<PropsType> {
  constructor(props: PropsType) {
    super(props);

    this.props.navigator.setOnNavigatorEvent(this._onNavigatorEvent);
  }

  _onNavigatorEvent = event => {
    if (event.type === "NavBarButtonPress") {
      if (event.id === "close") {
        this.props.navigator.dismissModal();
      }
    }
  };

  render() {
    return <WebView source={{ uri: this.props.item.url }} />;
  }
}

export default ArticleScreen;
