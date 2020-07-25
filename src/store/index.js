import { compose, applyMiddleware, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { createLogger } from "redux-logger";

import reducers from "./reducers";
import initialState from "./initialState";
import epics from "./epics";

let composeEnhancers = compose;
const epicMiddleware = createEpicMiddleware();

let middleware = [epicMiddleware];

if (process.env.NODE_ENV !== "production") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  middleware.push(createLogger({ collapsed: true }));
}

const createStoreWithMiddleware = composeEnhancers(applyMiddleware(...middleware))(createStore);
const store = createStoreWithMiddleware(reducers, initialState);
epicMiddleware.run(epics);

export default store;
