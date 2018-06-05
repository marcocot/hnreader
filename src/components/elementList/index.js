// @flow

import React from "react";
import { connect } from "react-redux";
import { View, Text } from "react-native";
import type { StateType } from "hnreader/src/store/reducers";
import { actionCreators as actions } from "hnreader/src/store/actions";
import Button from "hnreader/src/components/button";

type PropsType = {
  elements?: Array<number>,
  loadElements: () => void
};

class ElementsList extends React.PureComponent<PropsType> {
  componentDidMount() {
    this.props.loadElements();
  }

  render() {
    return (
      <View>
        {this.props.elements &&
          this.props.elements.map(e => {
            return <Text key={e}>{e}</Text>;
          })};
        <Button title={"Press me!"} onClick={this.props.loadElements} />
      </View>
    );
  }
}

const mapStateToProps = (state: StateType) => ({
  elements: state.elements
});

const mapDispatchToProps = (dispatch: Function) => ({
  loadElements: () => dispatch(actions.loadElements())
});

export default connect(mapStateToProps, mapDispatchToProps)(ElementsList);
