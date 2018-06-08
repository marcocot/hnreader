// @flow

import { TOP_STORIES_LOADED } from "hnreader/src/store/actions";

export type StateType = $Exact<{
  stories: Array<ItemType>,
  isLoading: boolean
}>;

type TopStoriesLoadedType = $Exact<{
  type: "TOP_STORIES_LOADED",
  payload: {
    stories: Array<ItemType>
  }
}>;

type SetLoadingType = $Exact<{
  type: "SET_LOADING",
  value: boolean
}>;

type BaseActionType = TopStoriesLoadedType | SetLoadingType;

const initialState: StateType = {
  stories: [],
  isLoading: false
};

const reducer = function(state: StateType = initialState, action: BaseActionType) {
  switch (action.type) {
    case TOP_STORIES_LOADED:
      return Object.assign({}, state, { stories: action.payload.stories });
    default:
      return {
        ...state
      };
  }
};

export default reducer;
