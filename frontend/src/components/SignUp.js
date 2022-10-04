import React from 'react'

export default function SignUp() {
  return (
    <div className='screen'>
        <div className='rsvp-img'></div>
        <div className='signup-text'>Enter Your<br/> Details</div>
        <input type='email' placeholder='Enter Email' className='signup-input'/>
        <input type='password' placeholder='Password' className='signup-input'/>
        <div className='signup-group'>
        <button className='button signup-button'>
        Sign Up
        </button>
        <div className='nav-to-login'>
            Already have an account ? <span className='blue-text'>Log in</span>
        </div>
        </div>
    </div>
  )
}
