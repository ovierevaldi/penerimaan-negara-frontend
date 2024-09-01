"use client"

require('./../dashboard.css')

import { useEffect, useState } from "react";

export default function DetailSetoranBulanan() {
     // State to manage the start and end dates
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [submitted, setSubmitted] = useState(false);

    // Handler for start date change
    const handleStartDateChange = (event) => {
        setStartDate(event.target.value);
    };

    // Handler for end date change
    const handleEndDateChange = (event) => {
        setEndDate(event.target.value);
    };

    // Handler for form submission
    const handleSubmit = () => {
        if (startDate && endDate) {
            setSubmitted(true)
        } 
        else {
            alert('Please select both start and end dates.');
        }
    };
  
      useEffect(() => {
          require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);


    return(
        <div className="dashboard-page">
            <h3 className="mb-4">Detail Setoran Bulanan</h3>

            <div className="d-flex flex-row column-gap-4">
                <div className="form-group flex-fill mr-2">
                <label htmlFor="startDate">Tanggal Awal:</label>
                <input
                    type="date"
                    id="startDate"
                    className="form-control"
                    value={startDate}
                    onChange={handleStartDateChange}
                />
                </div>

                <div className="form-group flex-fill">
                <label htmlFor="endDate">Tanggal Akhir:</label>
                <input
                    type="date"
                    id="endDate"
                    className="form-control"
                    value={endDate}
                    onChange={handleEndDateChange}
                />
                </div>
            </div>

            <button
                type="button"
                className="btn btn-primary mt-3"
                onClick={handleSubmit}
                disabled={!startDate && !endDate}
            >
                Submit
            </button>

            {/* Placeholder Table */}
        {submitted && <div className="mt-4">
            <h4 className="mb-3">Result:</h4>
            <table className="table table-bordered">
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Tipe Pajak</th>
                    <th>Jenis Pajak</th>
                    <th>Wilayah</th>
                    <th>Jumlah</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>1</td>
                    <td>Item 1</td>
                    <td>Description 1</td>
                    <td>Item 1</td>
                    <td>Description 1</td>
                </tr>
                </tbody>
            </table>
            </div>
        }
    </div>
    )
}