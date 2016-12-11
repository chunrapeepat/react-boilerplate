import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'

import Routes from './routes.js'

ReactDOM.render(<Routes/>, document.getElementById('app'))
