import React from 'react'

class Moment extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      moments: null
    }
  }

  render () {
    return (
      <div className='row' id='moment'>
        <div className='four columns' id='sender'>
          <img id='sender-pic' src='images/leo-profile.jpg' alt='sender-pic' />
        </div>
        <div className='four columns' id='emoji'>
          <img id='emoji-pic' src='images/emoji.png' alt='emoji-pic' />
        </div>
        <div className='four columns' id='reciever'>
          <img id='reciever-pic' src='images/tony-profile.jpg' alt='reciever-pic' />
        </div>
      </div>
    )
  }
}

export default Moment
