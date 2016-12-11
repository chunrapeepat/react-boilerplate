import React from 'react'
import { renderToString } from 'react-dom/server'
import { RouterContext, match } from 'react-router'

import routes from './src/js/routes.js'

const renderPage = (components) => {
  return `
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="utf-8">
      <title>React & Redux</title>
    </head>
    <body>
      <div id="app">${components}</div>
      <script src="http://127.0.0.1:8080/client.min.js"></script>
    </body>
  </html>
  `
}

export default function(req, res){
  match({
    location: req.url,
    routes
  }, (error, redirectLocation, renderProps) => {
      if(renderProps){
        res.status(200).send(renderPage(renderToString(<RouterContext {...renderProps}/>)))
      } else{
        res.status(404).send('Not Found')
      }
  })
}
