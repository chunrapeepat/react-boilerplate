import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import App from './containers/App.js'
import Another from './containers/Another.js'
import Menubar from './containers/Menubar.js'

class Routes extends React.Component {
  render(){
    return(
      <Router history={browserHistory}>
        <Route path="/" component={Menubar}>
          <IndexRoute component={App}/>
          <Route path="another" component={Another} />
        </Route>
      </Router>
    )
  }
}

export default Routes
