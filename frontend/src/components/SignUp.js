import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../context/UserContext';


export default function SignUp() {
    const [userData,setUserData] = useState({
        email : "",
        password : "",
    })
    const {setUser,user} = useAuth();
    const navigate = useNavigate();

    function submit(){

        if(userData.email === "" || userData.password === "")
        {
            alert("Please enter all required fields! ")
        }
        else
        {
            axios({
                method : 'post',
                url : 'http://localhost:5000/auth/organizer',
                headers : {"Access-Control-Allow-Origin" : "*"},
                params : {email : userData.email,password : userData.password}
            })
            .then((res)=>
            {
                if(res.data === "Customer signed in" || res.data === "Customer signed up" || res.data === "Organizer signed up" || res.data === "Organizer loggedin")
                {
                    setUser({...user,email : userData.email});
                    if(user.role === 'admin')
                    {
                        navigate("/admin");
                    }
                    else if(user.role === 'customer')
                    {
                        navigate("/participant");
                    }
                    else
                    {
                        navigate("/organizer");
                    }
                }
                else
                {
                    alert("error")
                }
            });
        }
    }

  return (
    <div className='screen'>
        <div className='rsvp-img'></div>
        <div className='signup-text'>Enter Your<br/> Details</div>
        <input type='email' placeholder='Enter Email' className='signup-input' value={userData.email} onChange={(e)=>setUserData({...userData,email : e.target.value})}/>
        <input type='password' placeholder='Password' className='signup-input' value={userData.password} onChange={(e)=>setUserData({...userData,password : e.target.value})}/>
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
