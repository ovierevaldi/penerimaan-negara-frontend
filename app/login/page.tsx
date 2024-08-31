'use client'

import { redirect, useRouter } from "next/navigation";
import { NextResponse, NextRequest } from 'next/server'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { setCookie, getCookie } from 'cookies-next';


export default function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMsg, setErrorMsg] = useState('');
    const router = useRouter();
   
    useEffect(() => {
        
        if(getCookie('token')){
            redirect('dashboard')
        }
    }, []);

    const requestLogin = async (event) => {
        event.preventDefault();
        try{
            const response = await  
                axios.post('http://localhost:3000/auth/login',{
                    username: username,
                    password: password
                })
                .then(function (response) {
                    setErrorMsg('Login Success !');
                    setCookie('token', response.data);
                    router.push('/dashboard')
                })
                .catch(function (error) {
                    setErrorMsg(error.response.data.message)
                });
        }
        catch(err){

        }
    }
      
    return(
    <div className="container"> 
        <form action="" className="needs-validation">
            <h1 className="text-center">Login Page</h1>
            <div className="input-group mb-3">
                <span className="input-group-text" id="input-username">Username</span>
                <input id="username" value={username} type="number" onChange={(event) => setUsername(event.target.value)} className="form-control" minLength={10} maxLength={10} />
                
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="input-password">Password</span>
                <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} className="form-control" />
            </div>
                <button type="button" className="btn btn-primary w-100" onClick={requestLogin}>Login</button>

             
        </form>
            <div>
                <span className="text-danger">{errorMsg}</span>
            </div>

    </div>

    
    )
}