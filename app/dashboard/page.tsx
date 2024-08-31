"use client"

import Link from "next/link";

import "chart.js/auto";
import { Bar } from "react-chartjs-2";

import Chart from './../../src/Chart'
import Header from "../common/header/header";
import Sidebar from "../common/sidebar/sidebar";
import { getCookie } from 'cookies-next';
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
    useEffect(() => {
        
        if(!getCookie('token')){
            redirect('login')
        }
    }, []);
    
    
    return(
       <div>
            <div>
                <h3>Chart</h3>
                <div className="d-flex">
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Tahun</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                    <select className="form-select" aria-label="Default select example">
                        <option selected>Bulan</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div>
            
                <Chart />

                    {/* <Bar 
                        data={{
                            datasets: [{
                                data: [20, 10],
                            }],
                            labels: ['a', 'b']
                        }}
                    /> */}
                </div>
            </div>
       </div>
    )
}