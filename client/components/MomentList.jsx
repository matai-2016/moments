import React from 'react'

import Moment from './Moment'

class MomentList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      moments: null
    }
  }

  render () {
    return (
      <div className='moment-list'>
        <div className='add-moment'>
          <div className='row'>
            <div className='twelve-columns'>
              <div className='add-moment-space'>
                <a className='button' id='add-button' href='#'><i className='fa fa-plus fa-3x' aria-hidden='true'></i> </a>
              </div>
            </div>
          </div>
        </div>
        <Moment />
      </div>
    )
  }
}

export default MomentList
