'use client'

import { redirect } from "next/navigation";
import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function LoginPage() {
    // const [posts, setPosts] = useState([]);
    const requestLogin = async (event) => {
        event.preventDefault();
        try{
            const response = await  
                axios.post('http://localhost:3000/auth/login',{
                    username: '11111111',
                    password: 'abc123'
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
        catch(err){

        }
    // const login = true;
    // if (!login) {
    //     redirect('dashboard')
    //   }
    }
      
    return(
    <div className="container">
                <form action="" className="needs-validation">
                    <h1 className="text-center">Login Page</h1>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="input-username">Username</span>
                        <input type="number" className="form-control" minLength={10} maxLength={10} />
                        
                    </div>
                    <div className="input-group mb-3">
                        <span className="input-group-text" id="input-password">Password</span>
                        <input type="password" className="form-control" />
                    </div>
                        <button type="button" className="btn btn-primary w-100" onClick={requestLogin}>Login</button>
                </form>
            </div>
    )
}