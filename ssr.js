import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { renderToString } from "react-dom/server";
import { RouterContext, match } from "react-router";

import routes from "./src/js/routes.js";

const renderPage = (components, initialState) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>React & Redux</title>
    </head>
    <body>
      <div id="app">${components}</div>
      <script>
        window.__INITIAL_STATE__ = ${JSON.stringify(initialState)}
      </script>
      <script src="http://127.0.0.1:8080/client.min.js"></script>
    </body>
  </html>
  `;
};

const SimpleReducers = (state, actions) => {
  return state;
};

export default function(req, res) {
  const store = createStore(SimpleReducers, { name: "Chun Rapeepat" });
  match(
    {
      location: req.url,
      routes
    },
    (error, redirectLocation, renderProps) => {
      if (renderProps) {
        res.status(200).send(
          renderPage(
            renderToString(
              <Provider store={store}>
                <RouterContext {...renderProps} />
              </Provider>
            ),
            store.getState()
          )
        );
      } else {
        res.status(404).send("Not Found");
      }
    }
  );
}
