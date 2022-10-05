import React from 'react'
import { useNavigate } from "react-router-dom";

export default function Onboarding() {
  const navigate = useNavigate();

  return (
    <div className='screen'>
        <div className='rsvp-img kyle-rsvp-img'></div>
        <div className='graphic-1'></div>
        <div className='welcome-text'>
            <p className='text kyle-extrabold'>Welcome to</p> <br/>
            <p className='text kyle-medium'>RSVP</p><br/>
            <p className='text kyle-regular'>Your all in one event Hub!</p>
        </div>
        <button className='button kyle-button' onClick={()=>{navigate("/role");}}>
        Get Started
        </button>
    </div>
  )
}
