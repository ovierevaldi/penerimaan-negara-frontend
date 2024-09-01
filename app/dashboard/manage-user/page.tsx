
'use client' 

require('./../dashboard.css')
require('./manage-user.css');

import { redirect, useRouter } from "next/navigation";

export default function ManageUser() {

    const router = useRouter();
    
    const basePath = '/dashboard/manage-user';
    const buttonItems = [
        { label: "Manajemen Pengguna", icon: "bi-person", path: "/manajemen-pengguna" },
        { label: "Manajemen Role Access", icon: "bi-key", path: "/manajemen-role-access" },
        { label: "Manajemen Role input sumber penerimaan pada setiap Role Access", icon: "bi-list", path: "/manajemen-role-input" },
        { label: "Manajemen Kategori Sumber Penerimaan", icon: "bi-tag", path: "/manajemen-kategori-sumber-penerimaan" },
        { label: "Manajemen Wilayah Setoran", icon: "bi-geo-alt", path: "/manajemen-wilayah-setoran" },
        { label: "Manajemen Sumber Penerimaan", icon: "bi-inbox", path: "/manajemen-sumber-penerimaan" },
      ];
    
      // Handler function for button clicks
      const handleClick = (path) => {
        const fullPath = `${basePath}${path}`;
        router.push(fullPath);
        // Implement further functionality as needed
      };
    
    return(
        <div className="dashboard-page">
            <h3 className="mb-4">Manajemen User</h3>

            <div className="d-flex flex-column row-gap-5 manage-user-container">
                {buttonItems.map((item, index) => (
                <button
                    key={index}
                    type="button"
                    className="btn btn-secondary mb-2 py-4"
                    onClick={() => handleClick(item.path)}
                >
                    <span className="label-text">{item.label}</span>
                    <i className={`bi ${item.icon} p-2`}></i>
                </button>
                ))}
            </div>
        </div>
    )
}