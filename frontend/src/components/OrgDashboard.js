import React, {useEffect, useState} from 'react'
import { useAuth } from '../context/UserContext'
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import CreateEvent from './CreateEvent';

export default function OrgDashboard() {
    const {user} = useAuth();
    const [edit,setEdit] = useState([]);
    const [events,setEvents] = useState([])
    useEffect(() => {
        axios({
            method : 'get',
            url : 'http://localhost:3000/event',
            headers : {"Access-Control-Allow-Origin" : "*"},
            params : {organizer : user.email}
        })
        .then((res)=>setEvents(res.data))
    }, [])
  const navigate = useNavigate();
  return (
    <div className='screen'>
    <div className='self-center decorate'>
        {user.role} : {user.email}
    </div>
    <div className='self-center create-event-text' onClick={()=>navigate('/create')}>Create Event</div>
    <div className='self-center my-event-text'>My Events</div>
    {
        events.map((e)=>
        <>
            <li key={e.eventName} className='self-center points' onClick={()=>setEdit(edit.concat(e.name))}>{e.eventName}</li>
        </>)
    }
    </div>
  )
}
