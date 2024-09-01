'use client'

require('./sidebar.css');

import Link from "next/link";
import { redirect, useRouter } from "next/navigation";

export default function Sidebar(){
    const router = useRouter();

    const handleClick = (e) => {
        e.preventDefault()
      }
     

    return(
        <div className="sidebar-container bg-black p-4">
            <h2 className="text-white">Sidebar</h2>
            <ul className="text-white no-bullet-list">
                <li><button onClick={() => router.replace('/dashboard')} className="link-sidebar" ><i className="bi bi-house px-2"></i> Dashboard</button></li>
                <li><button onClick={() => router.replace('/dashboard/summary-setoran-bulanan')} className="link-sidebar"><i className="bi bi-file-text px-2"></i> Summary Setoran Bulanan</button></li>
                <li><button onClick={() => router.replace('/dashboard/detail-setoran-bulanan')} className="link-sidebar"><i className="bi bi-eyeglasses px-2"></i> Detail Setoran Bulanan</button></li>
                <li><button onClick={() => router.replace('/dashboard/update-setoran-bulanan')} className="link-sidebar"><i className="bi bi-pencil text-white px-2"></i> Update Setoran Bulanan</button></li>
                <li><button onClick={() => router.replace('/dashboard/input-setoran-bulanan')} className="link-sidebar"><i className="bi bi-pencil text-white px-2"></i> Input Setoran Bulanan</button></li>
            </ul>  

            <span className="text-white"><i>Admin Only</i></span>
            <ul className="text-white no-bullet-list">
                <li><button onClick={() => router.replace('/dashboard/manage-user')} className="link-sidebar"><i className="bi bi-people"></i> Manage User</button></li>
            </ul>  
        </div>
    )
}