"use client"

import { useEffect } from "react";

export default function UpdateSetoranBulananPage() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
   
    return(
       <div>
        update
            <form className="">
                <select className="form-select" aria-label="Default select example">
                    <option selected>Pilih Pemasukan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>
                
                //Sub 1 After Select Above
                <select className="form-select" aria-label="Default select example" disabled>
                    <option selected>Pilih Pemasukan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                // Sub 2 If there's another Sub
                <select className="form-select" aria-label="Default select example" disabled>
                    <option selected>Pilih Pemasukan</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>

                <select className="form-select" aria-label="Default select example" disabled>
                    <option selected>Wilayah Setoran</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                </select>


                <div className="input-group">
                    <span className="input-group-text" id="jumlah-pemasukan">Jumlah Pemasukan (RP)</span>
                    <input type="number" className="form-control" placeholder="Cth: 1000000" aria-label="Username" aria-describedby="basic-addon1" />
                </div>
                <button type="submit" className="btn btn-primary">Input</button>
            </form>
      
            <div className="d-flex 
                justify-content-center align-items-center">
                    <button
                        type="button"
                        className="btn btn-primary"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                    >
                        Launch demo modal
                    </button>

                    <div
                        className="modal fade"
                        id="exampleModal"
                        tabIndex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                    >
                        <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Status Input Pemasukan
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            ></button>
                            </div>
                            <div className="modal-body">
                                <p>Input pemasukan Berhasil</p>

                                // Jika PPH tampilkan tabel
                                

                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
       </div>
    )
}