// @flow

import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import reducers from "./reducers";
import enhancers from "./enhancers";

const store = createStore(reducers, composeWithDevTools(enhancers));

export default store;
