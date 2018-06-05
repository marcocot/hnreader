// @flow

import createSagaMiddleware, { takeEvery } from "redux-saga";
import type { Saga } from "redux-saga";
import { actionCreators as actions, NEW_STORIES_LOAD } from "hnreader/src/store/actions";
import { call, put, all } from "redux-saga/effects";
import { LOAD_ITEM } from "./actions";

export const sagaMiddleware = createSagaMiddleware();

function* fetchNewstories(): Saga<any> {
  yield put(actions.setLoading(true));
  yield put(actions.newStoriesLoading());

  const body = yield call(fetch, "https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty");
  const content = yield body.json();
  yield all(
    content.slice(0, 15).map(id => {
      return put(actions.loadItem(id));
    })
  );

  yield put(actions.setLoading(false));
}

function* fetchItem(action: Object): Saga<ItemType> {
  const body = yield call(fetch, `https://hacker-news.firebaseio.com/v0/item/${action.id}.json`);
  const content = yield body.json();
  yield put(actions.itemLoaded(content));
}

export function* watchForNewStories(): Saga<any> {
  yield takeEvery(NEW_STORIES_LOAD, fetchNewstories);
}

export function* watchForLoadItem(): Saga<ItemType> {
  yield takeEvery(LOAD_ITEM, fetchItem);
}

export function* allSagas(): Saga<any> {
  yield all([watchForNewStories(), watchForLoadItem()]);
}
