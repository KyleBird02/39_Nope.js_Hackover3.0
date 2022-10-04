import React from 'react'

export default function Roles() {
  return (
    <div className='screen'>
        <div className='rsvp-img'></div>
        <div className='roles-text'>Sign Up</div>
        <div className='graphic-2'></div>
        <button className='button'>
        For Users
        </button>
        <button className='button outline'>
        For Organisations
        </button>
        <div className='nav-to-login'>
            Already have an account ? <span className='blue-text'>Log in</span>
        </div>
    </div>
  )
}
