import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function CreateEvent({data}) {
  const navigate = useNavigate();
  const [event,setEvent] = useState({
    "type": "",
    "dateTime": 0,
    "organizer": "",
    "eventName": "",
    "description": "",
    "location": "",
    "paymentAmount": "",
    "participants": 0,
    "codeOfConduct": ['hehe','lol'],
    "faqs": [],
    "sponsors": [],
    ...data
  })

  function submit(){
    axios({
        method : 'post',
        url : 'http://localhost:3000/event',
        headers : {"Access-Control-Allow-Origin" : "*"},
        params : event
    })
    .then((res)=>{
        if(res.data === 'Event created!')
        {
            alert('Event Created!');
            navigate('/organizer');
        }
        else
        {
            alert('Error, try again');
        }
    })
  }

  return (
    <div className='screen'>
    <div className='self-center'>Create Event</div>
    <select className='event-input select' onChange={(e)=>setEvent({...event,type : e.target.value})}>
        <option value="hackathon">Hackathon</option>
        <option value="concert">Concert</option>
        <option value="standup">Comedy</option>
        <option value="other">Other</option>
    </select>
    <input type='text' className='event-input' placeholder='Name of Event' value={event.eventname}
    onChange={(e)=>setEvent({...event,eventname : e.target.value})}></input>
    <input type='Date' className='event-input' ></input>
    <textarea className='event-input' rows={5} placeholder='Description'
    onChange={(e)=>setEvent({...event,description : e.target.value})}></textarea>
    <input type='text' className='event-input' placeholder='Location' value={event.location}
    onChange={(e)=>setEvent({...event,location : e.target.value})}></input>
    <input type='Number' className='event-input' placeholder='Ticket Price' value={event.paymentAmount}
    onChange={(e)=>setEvent({...event, paymentAmount : e.target.value})}></input>   
    <button className='button' onClick={submit}>Submit</button>
    </div>
)}
