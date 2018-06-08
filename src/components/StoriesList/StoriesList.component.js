// @flow

import React from "react";
import { View } from "react-native";
import StoryTeaser from "hnreader/src/components/StoryTeaser";

type PropsType = $Exact<{
  items?: Array<ItemType>
}>;

class StoriesList extends React.Component<PropsType> {
  render() {
    return (
      <View>
        {this.props.items &&
          this.props.items.map(item => {
            return <StoryTeaser item={item} key={item.id} />;
          })}
      </View>
    );
  }
}

export default StoriesList;
