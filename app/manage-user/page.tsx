
import Link from "next/link";

export default function ManageUser() {
    
    return(
        <div>
                //Header
            <div className="d-flex justify-content-between">
                <h1>Penerimaan Pajak</h1>
                <div>
                    <h3>User: $User_Username</h3>
                    <h3>Role: $User_Role</h3>
                </div>
            </div>

            <ul className="list-group">
                <li className="list-group-item"><Link className="btn btn-primary"  href="manage-user/manajemen-pengguna">Manajemen Pengguna</Link></li>
                <li className="list-group-item"><button className="btn btn-primary">Manajemen Role Access</button></li>
                <li className="list-group-item"><button className="btn btn-primary">Manajemen Role input sumber penerimaan pada setiap Role Access</button></li>
                <li className="list-group-item"><button className="btn btn-primary">Manajemen Kategori Sumber Penerimaan</button></li>
                <li className="list-group-item"><button className="btn btn-primary">Manajemen Wilayah Setoran</button></li>
                <li className="list-group-item"><button className="btn btn-primary">Manajemen Sumber Penerimaan</button></li>
            </ul>
        </div>
    )
}