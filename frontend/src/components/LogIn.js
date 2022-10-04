import React from 'react'

export default function LogIn() {
  return (
    <div className='screen'>
        <div className='rsvp-img'></div>
        <div className='signup-text'>Welcome <br/> Back!</div>
        <input type='email' placeholder='Enter Email' className='signup-input'/>
        <input type='password' placeholder='Password' className='signup-input'/>
        <div className='signup-group'>
        <button className='button signup-button'>
        Log In
        </button>
        <div className='nav-to-login'>
            New Here ? <span className='blue-text'>Sign Up</span>
        </div>
        </div>
    </div>
  )
}
