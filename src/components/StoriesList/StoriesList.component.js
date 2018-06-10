// @flow

import React from "react";
import styled from "styled-components";
import StoryTeaser from "hnreader/src/components/StoryTeaser";

type PropsType = $Exact<{
  items?: Array<ItemType>,
  onPress: (item: ItemType) => void
}>;

const ListContainer = styled.ScrollView``;

class StoriesList extends React.Component<PropsType> {
  render() {
    return (
      <ListContainer>
        {this.props.items &&
          this.props.items.map(item => {
            return <StoryTeaser item={item} key={item.id} onPress={this.props.onPress} />;
          })}
      </ListContainer>
    );
  }
}

export default StoriesList;
