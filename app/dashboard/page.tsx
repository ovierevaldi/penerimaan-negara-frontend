"use client"

require('./../global.css')

import "chart.js/auto";
import Chart from '../../src/PendapatanPerbulanChart'
import { getCookie } from 'cookies-next';
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import PendapatanPerbulanChart from "../../src/PendapatanPerbulanChart";

export default function DashboardPage() {
    useEffect(() => {
        
        if(!getCookie('token')){
            redirect('login')
        }
    }, []);
    
    return(
       <div className="dashboard-page">
            <h3>Chart</h3>
            <br />
            <div>
                <p><b>Filter:</b> </p>
                <div className="d-flex column-gap-4">
                    <select className="form-select dropdown-container" aria-label="Default select example">
                        <option selected>var_tahundefault</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="form-select dropdown-container" aria-label="Default select example">
                        <option selected>var_bulandefault</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    
                </div>
            </div>
            <br />
            <div className="d-flex justify-content-center">
                <PendapatanPerbulanChart />
            </div>
       </div>
    )
}