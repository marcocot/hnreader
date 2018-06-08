// @flow

import createSagaMiddleware from "redux-saga";
import type { Saga } from "redux-saga";
import { actionCreators as actions, TOP_STORIES_LOAD } from "hnreader/src/store/actions";
import { call, put, all, takeEvery } from "redux-saga/effects";

export const sagaMiddleware = createSagaMiddleware();

function* fetchTopStories(): Saga<any> {
  yield put(actions.topStoriesLoading());

  const body = yield call(fetch, "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty");
  const content = yield body.json();

  const stories = yield all(
    content.slice(0, 15).map(id => {
      return call(fetchItem, id);
    })
  );

  yield put(actions.topStoriesLoaded(stories));
}

function* fetchItem(id: string): Saga<ItemType> {
  const body = yield call(fetch, `https://hacker-news.firebaseio.com/v0/item/${id}.json`);
  const content = yield body.json();
  return content;
}

export function* watchForNewStories(): Saga<any> {
  yield takeEvery(TOP_STORIES_LOAD, fetchTopStories);
}

export function* allSagas(): Saga<any> {
  yield all([watchForNewStories()]);
}
