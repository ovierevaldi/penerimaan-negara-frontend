
'use client' 

require('./../dashboard.css')
require('./manage-user.css')

export default function ManageUser() {

    const buttonItems = [
        { label: "Manajemen Pengguna", icon: "bi-person" },
        { label: "Manajemen Role Access", icon: "bi-key" },
        { label: "Manajemen Role input sumber penerimaan pada setiap Role Access", icon: "bi-list" },
        { label: "Manajemen Kategori Sumber Penerimaan", icon: "bi-tag" },
        { label: "Manajemen Wilayah Setoran", icon: "bi-geo-alt" },
        { label: "Manajemen Sumber Penerimaan", icon: "bi-inbox" },
      ];
    
      // Handler function for button clicks
      const handleClick = (label) => {
        console.log(`Button clicked: ${label}`);
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
                    onClick={() => handleClick(item.label)}
                >
                    <span className="label-text">{item.label}</span>
                    <i className={`bi ${item.icon} p-2`}></i>
                </button>
                ))}
            </div>
        </div>
    )
}