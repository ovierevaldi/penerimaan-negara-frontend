"use client"

import Link from "next/link";

import "chart.js/auto";
import { Bar } from "react-chartjs-2";



export default function LoginPage() {

    
    return(
       <div>
            //Header
            <div className="d-flex justify-content-between">
                <h1>Penerimaan Pajak</h1>
                <div>
                    <h3>User: $User_Username</h3>
                    <h3>Role: $User_Role</h3>

                    <Link className="btn btn-primary" href="/login">Log Out</Link>
                </div>
            </div>

            <div>
                <Link className="btn btn-primary" href="/pemasukan">Input Pemasukan</Link>
            </div>

            <div>
                <Link className="btn btn-primary" href="/manage-user">Manage User</Link>
            </div>

            <br />
            <br />

            <div>
                <h1>Tampilkan Data</h1>
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
                    <Bar 
                        data={{
                            datasets: [{
                                data: [20, 10],
                              }],
                            labels: ['a', 'b']
                        }}
                    />
                </div>
            </div>
       </div>
    )
}