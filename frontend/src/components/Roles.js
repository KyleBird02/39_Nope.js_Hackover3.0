import React from 'react'
import { useAuth } from '../context/UserContext'
import { useNavigate } from "react-router-dom";


export default function Roles() {
  const {setUser,user} = useAuth();
  const navigate = useNavigate();

  return (
    <div className='screen'>
        <div className='rsvp-img'></div>
        <div className='roles-text'>Sign Up</div>
        <div className='graphic-2'></div>
        <button className='button' onClick={()=>{
          setUser({...user,role : 'customer'});
          navigate('/signup');
        }}>
        For Users
        </button>
        <button className='button outline'
        onClick={()=>{
          setUser({...user,role : 'organizer'});
          navigate('/signup');
        }}>
        For Organisations
        </button>
        <div className='nav-to-login'>
            Already have an account ? <span className='blue-text'>Log in</span>
        </div>
    </div>
  )
}
