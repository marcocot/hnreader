// @flow

import { ITEM_LOADED, SET_LOADING } from "hnreader/src/store/actions";

export type StateType = $Exact<{
  stories: Array<ItemType>,
  isLoading: boolean
}>;

type LoadItemType = $Exact<{
  type: "ITEM_LOADED",
  item: ItemType
}>;

type SetLoadingType = $Exact<{
  type: "SET_LOADING",
  value: boolean
}>;

type BaseActionType = LoadItemType | SetLoadingType;

const initialState: StateType = {
  stories: [],
  isLoading: false
};

const reducer = function(state: StateType = initialState, action: BaseActionType) {
  switch (action.type) {
    case ITEM_LOADED:
      state.stories.push(action.item);
      return { ...state };
    case SET_LOADING:
      state.isLoading = action.value;
      return { ...state };
    default:
      return {
        ...state
      };
  }
};

export default reducer;
