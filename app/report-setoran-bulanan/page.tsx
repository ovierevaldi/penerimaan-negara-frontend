"use client"


export default function ReportSetoranBulananPage() {
    return(
        <div>
           <div className="d-flex justify-content-between">
            <h1>Report Setoran Bulanan</h1>
          
           </div>
            <select className="form-select" aria-label="Default select example">
                <option selected>Pilih Tahun</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
            </select>
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">1</th>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td><button className="btn btn-primary">Edit</button></td>
                    </tr>
                  
                </tbody>
                </table>

                <button className="btn btn-primary"> Export Excel</button>
        </div>
    )
}