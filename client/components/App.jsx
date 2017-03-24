import React from 'react'

import ErrorMessage from './ErrorMessage'
import Home from './Home'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      moments: null
    }
  }

  render () {
    return (
      <div className='app'>
        <ErrorMessage error={this.state.error} />
        <div className='container'>
          <Home />
        </div>
      </div>
    )
  }
}

export default App
