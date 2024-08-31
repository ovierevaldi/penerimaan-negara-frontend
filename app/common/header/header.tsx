'use client'

import Link from "next/link";
import { deleteCookie } from 'cookies-next';
import { redirect, useRouter } from "next/navigation";

export default function Header(){
    const router = useRouter();

    function logout(){
        deleteCookie('token');
        router.push('/login')
    }

    return(
        <div className="d-flex py-2 justify-content-between">
            <h1>Penerimaan Pajak</h1>

            <div className="d-flex align-items-center column-gap-4">
                <div>
                    <span><b>User</b>: var_username</span>
                    <br />
                    <span><b>Role</b>: $User_Role</span>
                </div>
                <button className="btn btn-danger" onClick={logout}><i className="bi bi-power"></i> Log Out</button>
            </div>
        </div>
    )
}