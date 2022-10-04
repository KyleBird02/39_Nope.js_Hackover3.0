import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export default function SignUp() {
    const [user,setUser] = useState({
        email : "",
        password : "",
    })
    const navigate = useNavigate();

    function submit(){
        if(user.email === "" || user.password === "")
        {
            alert("Please enter all required fields! ")
        }
        else
        {
            axios({
                method : 'post',
                url : 'https://glenn-mendonca-39-nope-js-hackover3-0-rx9j56g76qghrjj-3000.githubpreview.dev/auth/customer',
                headers : {"Access-Control-Allow-Origin" : "*"},
                params : {email : user.email, password : user.password}
            })
            .then((res)=>
            {
                if(res.data === "Customer signed in" || res.data === "Customer signed up")
                {
                    navigate("/admin");
                }
            });
        }
    }

  return (
    <div className='screen'>
        <div className='rsvp-img'></div>
        <div className='signup-text'>Enter Your<br/> Details</div>
        <input type='email' placeholder='Enter Email' className='signup-input' value={user.email} onChange={(e)=>setUser({...user,email : e.target.value})}/>
        <input type='password' placeholder='Password' className='signup-input' value={user.password} onChange={(e)=>setUser({...user,password : e.target.value})}/>
        <div className='signup-group'>
        <button className='button signup-button' onClick={submit}>
        Sign Up
        </button>
        <div className='nav-to-login'>
            Already have an account ? <span className='blue-text'>Log in</span>
        </div>
        </div>
    </div>
  )
}
