// @flow

import React from "react";
import { Button } from "react-native";

type PropsType = $Exact<{
  title: string,
  onClick: () => void
}>;

class ActionButton extends React.PureComponent<PropsType> {
  render() {
    return <Button onPress={this.props.onClick} title={this.props.title} />;
  }
}

export default ActionButton;
