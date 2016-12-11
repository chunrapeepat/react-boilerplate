import React from 'react'
import ReactDOM from 'react-dom'
import { Link } from 'react-router'

class Menubar extends React.Component {
  render(){
    return(
      <div>
        <Link to='/'>Index</Link> *
        <Link to='/another'>Another Page</Link>
        {this.props.children}
      </div>
    )
  }
}

export default Menubar
