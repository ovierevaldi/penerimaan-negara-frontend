"use client"

require('./../dashboard.css')

import { useEffect, useState } from "react";

export default function UpdateSetoranBulananPage() {

    // State to store the selected date
    const [selectedDate, setSelectedDate] = useState('');

    // Handle date change
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    }

    
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
   
    return(
        <div className="dashboard-page">
            <h3 className="mb-4">Update Setoran Bulanan</h3>

            <div className="form-group">
            <label htmlFor="dateInput">Pilih Tanggal:</label>
                <input
                type="date"
                id="dateInput"
                className="form-control"
                value={selectedDate}
                onChange={handleDateChange}
            />
            </div>

            {/* Placeholder Table */}
            {selectedDate && <div className="mt-4">
                <h4 className="mb-3">Result:</h4>
                <table className="table table-bordered">
                    <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipe Pajak</th>
                        <th>Jenis Pajak</th>
                        <th>Wilayah</th>
                        <th>Jumlah</th>
                        <th>Edit</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>1</td>
                        <td>Item 1</td>
                        <td>Description 1</td>
                        <td>Item 1</td>
                        <td>Description 1</td>
                        <td><button className="btn btn-primary btn-sm">Edit</button></td>
                    </tr>
                    </tbody>
                </table>
                </div>
            }
        </div>
    )
}