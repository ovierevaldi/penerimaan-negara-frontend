require('./sidebar.css');

import Link from "next/link";

export default function Sidebar(){
    return(
        <div className="bg-black h-100 px-4">
            <h2 className="text-white">Sidebar</h2>
            <ul className="text-white no-bullet-list">
                <li><Link href={'dashboard'} className="link-sidebar"><i className="bi bi-house"></i> Dashboard</Link></li>
                <li><Link href={'summary-setoran-bulanan'} className="link-sidebar"><i className="bi bi-file-text"></i> Summary Setoran Bulanan</Link></li>
                <li><Link href={'detail-setoran-bulanan'} className="link-sidebar"><i className="bi bi-eyeglasses"></i> Detail Setoran Bulanan</Link></li>
                <li><Link href={'update-setoran-bulanan'} className="link-sidebar"><i className="bi bi-pencil text-white"></i> Update Setoran Bulanan</Link></li>
                <li><Link href={'input-setoran-bulanan'} className="link-sidebar"><i className="bi bi-pencil text-white"></i> Input Setoran Bulanan</Link></li>
            </ul>  

            <p className="text-white">Admin Only</p>
            <ul className="text-white no-bullet-list">
                <li><Link href={'dashboard'} className="link-sidebar"><i className="bi bi-people"></i> Manage User</Link></li>
            </ul>  
        </div>
    )
}