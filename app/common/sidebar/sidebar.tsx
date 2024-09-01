require('./sidebar.css');

import Link from "next/link";

export default function Sidebar(){
    return(
        <div className="sidebar-container bg-black p-4">
            <h2 className="text-white">Sidebar</h2>
            <ul className="text-white no-bullet-list">
                <li><Link href={'dashboard'} className="link-sidebar"><i className="bi bi-house px-2"></i> Dashboard</Link></li>
                <li><Link href={'summary-setoran-bulanan'} className="link-sidebar"><i className="bi bi-file-text px-2"></i> Summary Setoran Bulanan</Link></li>
                <li><Link href={'detail-setoran-bulanan'} className="link-sidebar"><i className="bi bi-eyeglasses px-2"></i> Detail Setoran Bulanan</Link></li>
                <li><Link href={'update-setoran-bulanan'} className="link-sidebar"><i className="bi bi-pencil text-white px-2"></i> Update Setoran Bulanan</Link></li>
                <li><Link href={'input-setoran-bulanan'} className="link-sidebar"><i className="bi bi-pencil text-white px-2"></i> Input Setoran Bulanan</Link></li>
            </ul>  

            <span className="text-white"><i>Admin Only</i></span>
            <ul className="text-white no-bullet-list">
                <li><Link href={'dashboard'} className="link-sidebar"><i className="bi bi-people"></i> Manage User</Link></li>
            </ul>  
        </div>
    )
}