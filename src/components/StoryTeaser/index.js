// @flow

import React from "react";
import styled from "styled-components";
import { TouchableOpacity } from "react-native";

type PropsType = $Exact<{
  item: ItemType,
  onClick?: (item: ItemType) => void
}>;

const TeaserOuterContainer = styled.View`
  padding-horizontal: 10;
`;

const TeaserContainer = styled.View`
  padding-horizontal: 10;
  padding-vertical: 15;
  border-color: ${({ theme }) => theme.colors.lighterDark};
  border-bottom-width: 0.5;
`;

const TitleText = styled.Text`
  font-size: ${({ theme }) => theme.text.titleSize};
  margin-bottom: 5;
  color: ${({ theme }) => theme.colors.dark};
`;

const SubtitleContainer = styled.Text`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const SubtitleText = styled.Text`
  font-size: ${({ theme }) => theme.text.subtitleSize};
  color: ${({ theme }) => theme.colors.lightDark};
`;

class StoryTeaser extends React.PureComponent<PropsType> {
  _getSubtitle(item: ItemType): string {
    return `${item.score} | ${item.by}`;
  }

  _onClick = () => {
    if (this.props.onClick) {
      this.props.onClick(this.props.item);
    }
  };

  render() {
    const { item } = this.props;
    return (
      <TouchableOpacity onPress={this.props.onClick}>
        <TeaserOuterContainer>
          <TeaserContainer>
            <TitleText>{item.title}</TitleText>
            <SubtitleContainer>
              <SubtitleText>{item.score}</SubtitleText>
              <SubtitleText>{item.by}</SubtitleText>
            </SubtitleContainer>
          </TeaserContainer>
        </TeaserOuterContainer>
      </TouchableOpacity>
    );
  }
}

export default StoryTeaser;
