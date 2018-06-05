// @flow

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";
import enhancers, { sagaMiddleware } from "./enhancers";
import { allSagas } from "./sagas";

const store = createStore(reducers, composeWithDevTools(enhancers));
sagaMiddleware.run(allSagas);

export default store;
