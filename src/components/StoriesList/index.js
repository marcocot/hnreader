// @flow

import React from "react";
import { connect } from "react-redux";
import type { StateType } from "hnreader/src/store/reducers";
import { actionCreators as actions } from "hnreader/src/store/actions";
import StoriesList from "./StoriesList.component";

type PropsType = $Exact<{
  stories?: Array<ItemType>,
  loadNewStories: () => void,
  onPress: (item: ItemType) => void
}>;

class StoriesListContainer extends React.Component<PropsType> {
  componentDidMount() {
    this.props.loadNewStories();
  }

  render() {
    return <StoriesList onPress={this.props.onPress} items={this.props.stories} />;
  }
}

const mapStateToProps = (state: StateType) => ({
  stories: state.stories
});

const mapDispatchToProps = (dispatch: Function) => ({
  loadNewStories: () => dispatch(actions.loadTopStories())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(StoriesListContainer);
