// @flow

export const TOP_STORIES_LOAD = "TOP_STORIES/LOAD";
export const TOP_STORIES_LOADING = "TOP_STORIES_LOADING";
export const TOP_STORIES_LOADED = "TOP_STORIES_LOADED";

export const actionCreators = {
  loadTopStories: () => ({
    type: TOP_STORIES_LOAD
  }),
  topStoriesLoading: () => ({
    type: TOP_STORIES_LOADING
  }),
  topStoriesLoaded: (stories: Array<ItemType>) => ({
    type: TOP_STORIES_LOADED,
    payload: {
      stories
    }
  })
};
