'use client'

import axios from "axios";
import { getCookie } from "cookies-next";
import { useEffect, useState } from "react";

require('./../../dashboard.css');
require('./../../../global.css')

export default function ManajemenPenggunaPage() {
    const [listWilayah, setListWilayah] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [response, setResponse] = useState(null);

    const url = process.env.NEXT_PUBLIC_TEST_API_URL + '/pajak/list-wilayah';
    const token = getCookie('token');

    const handleDelete = (id) => {
        const url_delete = process.env.NEXT_PUBLIC_TEST_API_URL + `/pajak/delete-wilayah/${id}`;

        postRequest(url_delete, token)
    };

    const getWilayah = async () => {
        try {
            const response = await axios.get(url, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setListWilayah(response.data);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

    const postRequest = async (url_delete, token) => {
        try {
            const res = await axios.delete(url_delete, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setResponse('Delete Wilayah Sukses');
            await getWilayah();
        } catch (err) {
            setResponse('Delete Wilayah Gagal');
        }
    };

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
        getWilayah();
    }, []);

    return(
        <div className="dashboard-page">
                <h3 className="mb-4">Manage Wilayah Setoran</h3>

                <h4 className="mb-3">List Wilayah</h4>
                {
                    !loading && !error &&
                   <div className="table-scrollable">
                        <table className="table table-bordered table-scrollable">
                            <thead>
                                <tr>
                                    <th>Wilayah</th>
                                    <th>Edit</th>
                                </tr>
                            </thead>
                            <tbody>
                                {listWilayah.map((item) => (
                                    <tr key={item.id}>
                                        <td>{item.nama_wilayah}</td>
                                        <td>
                                        <button 
                                            className="btn btn-danger btn-sm"
                                            onClick={() => handleDelete(item.id)}
                                            data-bs-toggle="modal"
                                            data-bs-target="#exampleModal"
                                        >
                                            Hapus
                                        </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                   </div>
                }
                {loading && <p>Loading...</p>}
                {error &&  <p>Error: {error}</p>}


                <div className="d-flex justify-content-center align-items-center">
                <div
                    className="modal fade"
                    id="exampleModal"
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
                                <p>{response}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}