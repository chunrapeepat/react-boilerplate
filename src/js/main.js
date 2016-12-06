import React from 'react'
import ReactDOM from 'react-dom'

class App extends React.Component {
  render(){
    return(
      <div>
        Hello World, Yeah Yeah Yeah!
      </div>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'))
