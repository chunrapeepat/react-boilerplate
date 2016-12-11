import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App.js'
import Another from './containers/Another.js'
import Menubar from './containers/Menubar.js'

export default (
  <Route path="/" component={Menubar}>
    <IndexRoute component={App}/>
    <Route path="another" component={Another} />
  </Route>
)
