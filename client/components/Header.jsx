import React from 'react'

class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      moments: null
    }
  }

  render () {
    return (
      <div className='header'>
        <div className='row'>
          <div className='ten columns'>
            <div className='logo'>
              <img id='logo-pic' src='/images/logo-big.png' alt='Logo'/>
            </div>
          </div>
          <div className='two columns'>
            <div className='login-button'>
              <img id='login-button' src='/images/default-profile.png' alt='Login button'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
