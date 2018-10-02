import React from "react";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { renderToString } from "react-dom/server";
import { RouterContext, match } from "react-router";
import { ServerStyleSheet } from "styled-components";

import routes from "./src/js/routes.js";

const renderPage = (components, styles, initialState) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>React & Redux</title>
    </head>
    <body>
      ${styles}
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
  const sheet = new ServerStyleSheet();
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
              sheet.collectStyles(
                <Provider store={store}>
                  <RouterContext {...renderProps} />
                </Provider>
              )
            ),
            sheet.getStyleTags(),
            store.getState()
          )
        );
      } else {
        res.status(404).send("Not Found");
      }
    }
  );
}
