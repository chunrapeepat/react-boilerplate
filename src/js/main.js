import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import routes from "./routes.js";

const SimpleReducers = (state, actions) => {
  return state;
};

const store = createStore(
  SimpleReducers,
  { name: "Chun Rapeepat" },
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById("app")
);
