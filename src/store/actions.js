// @flow

export const NEW_STORIES_LOAD = "NEW_STORIES_LOAD";
export const NEW_STORIES_LOADING = "NEW_STORIES_LOADING";
export const NEW_STORIES_LOADED = "NEW_STORIES_LOADED";
export const LOAD_ITEM = "LOAD_ITEM";
export const ITEM_LOADED = "ITEM_LOADED";
export const SET_LOADING = "SET_LOADING";

export const actionCreators = {
  loadNewStories: () => ({
    type: NEW_STORIES_LOAD
  }),
  newStoriesLoading: () => ({
    type: NEW_STORIES_LOADING
  }),
  newStoriesLoaded: (payload: Array<ItemType>) => ({
    type: NEW_STORIES_LOADED,
    payload
  }),
  loadItem: (id: string) => ({
    type: LOAD_ITEM,
    id
  }),
  itemLoaded: (item: ItemType) => ({
    type: ITEM_LOADED,
    item
  }),
  setLoading: (value: boolean) => ({
    type: SET_LOADING,
    value
  })
};
