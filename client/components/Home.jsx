import React from 'react'

import Header from './Header'
import MomentList from './MomentList'

class Home extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      moments: null
    }
  }

  render () {
    return (
      <div className='home'>
        <Header />
        <MomentList />
      </div>
    )
  }
}

export default Home
