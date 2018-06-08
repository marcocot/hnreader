// @flow

import React from "react";
import { View, Text } from "react-native";

type PropsType = $Exact<{
  item: ItemType
}>;

class StoryTeaser extends React.PureComponent<PropsType> {
  render() {
    return (
      <View>
        <Text>{this.props.item.title}</Text>
      </View>
    );
  }
}

export default StoryTeaser;
