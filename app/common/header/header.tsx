import Link from "next/link";

export default function Header(){
    return(
        <div className="d-flex py-2 justify-content-between">
            <h1>Penerimaan Pajak</h1>

            <div className="d-flex align-items-center column-gap-4">
                <div>
                    <span><b>User</b>: var_username</span>
                    <br />
                    <span><b>Role</b>: $User_Role</span>
                </div>
                <Link className="btn btn-danger" href="/login"><i className="bi bi-power"></i> Log Out</Link>
            </div>
        </div>
    )
}