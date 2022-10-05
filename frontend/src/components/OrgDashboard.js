import React from 'react'
import { useAuth } from '../context/UserContext'
import { useNavigate } from "react-router-dom";

export default function OrgDashboard() {
  const {user} = useAuth();
  const navigate = useNavigate();
  return (
    <div className='screen'>
    <div className='self-center decorate'>
        {user.role} : {user.email}
    </div>
    <div className='self-center button signup-button verify-button' onClick={()=>navigate('/create')}>Create Event</div>
    </div>
  )
}
