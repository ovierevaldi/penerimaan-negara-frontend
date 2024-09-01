'use client'

import { useState } from "react";

require('./../dashboard.css')

export default function SummarySetoranBulananPage() {
    const [selectedYear, setSelectedYear] = useState('');
    const [selectedMonth, setSelectedMonth] = useState('');
    const [message, setMessage] = useState('');
  
    // Get the current year
    const currentYear = new Date().getFullYear();
  
    // Generate year options for the last 10 years and the next 10 years
    const yearOptions = [];
    for (let year = currentYear - 10; year <= currentYear + 10; year++) {
      yearOptions.push(year);
    }
  
    // Generate month options
    const monthOptions = [
      { value: '', label: 'Select Month' },
      { value: '01', label: 'January' },
      { value: '02', label: 'February' },
      { value: '03', label: 'March' },
      { value: '04', label: 'April' },
      { value: '05', label: 'May' },
      { value: '06', label: 'June' },
      { value: '07', label: 'July' },
      { value: '08', label: 'August' },
      { value: '09', label: 'September' },
      { value: '10', label: 'October' },
      { value: '11', label: 'November' },
      { value: '12', label: 'December' },
    ];
  
    const handleYearChange = (event) => {
      setSelectedYear(event.target.value);
    };
  
    const handleMonthChange = (event) => {
      setSelectedMonth(event.target.value);
    };
  
    const handleSubmit = () => {
      if (!selectedYear || !selectedMonth) {
        setMessage('Please select both year and month.');
        return;
      }
      setMessage(`Selected Year: ${selectedYear}, Month: ${selectedMonth}`);
    };
  
    return (
      <div className="dashboard-page">
        <h3 className="mb-4">Summary Pendapatan Pajak</h3>
  
        <div className="d-flex flex-row gap-3 mb-4">
          <div className="form-group flex-fill">
            <label htmlFor="year">Year:</label>
            <select
              id="year"
              className="form-control"
              value={selectedYear}
              onChange={handleYearChange}
            >
              <option value="">Select Year</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </select>
          </div>
  
          <div className="form-group flex-fill">
            <label htmlFor="month">Month:</label>
            <select
              id="month"
              className="form-control"
              value={selectedMonth}
              onChange={handleMonthChange}
            >
              {monthOptions.map((month) => (
                <option key={month.value} value={month.value}>
                  {month.label}
                </option>
              ))}
            </select>
          </div>
        </div>
  
       
        <button
          type="button"
          className="btn btn-primary mb-4"
          onClick={handleSubmit}
          disabled={!selectedYear || !selectedMonth}
        >
          SUMMARY <i className="bi bi-journal-text"></i>
        </button>
  
        {message && (
            <div>
                <div className="alert alert-info mb-4">
                {message}
            </div>

            <div className="mt-4">
                <h4 className="mb-3">Placeholder Graph</h4>
                <div className="graph-placeholder">
                {/* Placeholder graph - could use a library to create a real graph */}
                <svg width="100%" height="300" style={{ border: '1px solid #ccc' }}>
                    <rect x="10" y="10" width="50" height="200" fill="#007bff" />
                    <rect x="70" y="50" width="50" height="160" fill="#28a745" />
                    <rect x="130" y="30" width="50" height="180" fill="#ffc107" />
                    <rect x="190" y="70" width="50" height="140" fill="#dc3545" />
                </svg>
                </div>
            </div>

            <h4 className="mb-3">Placeholder Table</h4>
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
        )}

      </div>
    );
}