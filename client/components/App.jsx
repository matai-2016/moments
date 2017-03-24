import React from 'react'

import api from '../api'
import ErrorMessage from './ErrorMessage'
//--Import rest of components

class App extends React.Component {
  constructor (props) {
    super (props)
    this.state = {
      moments: null
    }
  }

  render () {
    return (
      <div className='app'>
        <ErrorMessage error={this.state.error} />
      </div>
    )
  }
}

export default App
