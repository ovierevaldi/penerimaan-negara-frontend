"use client"

require('./../dashboard.css')
require('./input-setoran.css')

import { useEffect, useRef, useState } from "react";

import { getCurrentDate } from "../../common/utility";
import axios from "axios";
import { getCookie } from "cookies-next";


const tipePajak = ['Pajak', 'Pajak Daerah', 'Bukan Pajak']

const jenisPajak = ['PPh 21 Pegawai', 'PPh 22 (Pot Put)', 'PPh 23 (Pot Put)', 'PPh 26 (Pot Put)', 'PPh 4(2) (Pot Put)', 'PPh 15 (Pot Put)', 'PPh 25 Kredit Pajak', 'PPh 29 SPT Badan KB', 'PPh 22 Ekspor', 'PPN MASA KB']
const jenisPajakDaerah = [
    "Pajak Bumi dan Bangunan",
    "Pajak Penggunaan Hutan (IPPKH)",
    "Pajak Alat Berat / Kendaraan Bermotor",
    "Pajak Penerangan Jalan",
    "Pajak Air Permukaan/ Bawah Tanah",
    "Pajak Daerah Jasa Boga",
    "Pajak Galian C",
    "Pajak Penggunaan Hutan",
    "Pajak Reklame"
];
const jenisNonPajak = [
    "Dividen",
    "SP3D (Sumbangan Pihak ke-3)",
    "BPHTB",
    "Iuran Produksi Batubara (ROYALTI)",
    "Iuran Tetap / Kuasa Penambangan",
    "Retribusi Kebersihan",
    "Retribusi IMB",
    "Sewa Perairan",
    "Retribusi Pemeriksaan Alat Pemadam Kebakaran",
    "PNBP Pendaftaran, Pelayanan dan Pengukuran Aset",
    "PNBP Biaya Hak Penggunaan (BHP)",
    "PNBP Peralihan Aset"
];

const subIuran = ['KW.96PP0289 (Peranap) 18.230 Ha2',
    'KW.02.SS.2010 (Muara Tiga Besar) 2.866 Ha2',
    'KW.ME.01.ET.011 (Banko Barat) 4.500 Ha2',
    'KW.ME.01.ET.002 B (Banko Suban) 22.937 Ha2',
    'KW.01.SS.2010 Air Laya 7.621 Ha2',
    'KW.ME.01.ET.002 A (Banko Tengah) 2.423 Ha2',
    'Landrent Ombilin',];

const listWilayah = [
    "Aceh",
    "Bali",
    "Bangka Belitung",
    "Banten",
    "Bengkulu",
    "Gorontalo",
    "Jakarta",
    "Jambi",
    "Jawa Barat",
    "Jawa Tengah",
    "Jawa Timur",
    "Kalimantan Barat",
    "Kalimantan Tengah",
    "Kalimantan Selatan",
    "Kalimantan Utara",
    "Kepulauan Riau",
    "Lampung",
    "Maluku",
    "Maluku Utara",
    "Nusa Tenggara Barat",
    "Nusa Tenggara Timur",
    "Papua",
    "Papua Barat",
    "Riau",
    "Sulawesi Barat",
    "Sulawesi Selatan",
    "Sulawesi Tengah",
    "Sulawesi Tenggara",
    "Sulawesi Utara",
    "Sumatera Barat",
    "Sumatera Selatan",
    "Sumatera Utara",
    "Yogyakarta"
];

export default function InputPemasukanPage() {
    const [selectedTipePajak, setselectedTipePajak] = useState('');
    const [selectedJenisPajak, setSelectedJenisPajak] = useState('');
    const [selectedJenisIuran, setSelectedJenisIuran] = useState('');
    const [selectedWilayah, setSelectedWilayah] = useState('')
    const [jumlahPemasukan, setjumlahPemasukan] = useState(0);

    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);

    const modalButtonRef = useRef(null);

    const handelTipePajakChange = (event) => {
        setselectedTipePajak(event.target.value);
    };

    const handleJenisPajakChange = (event) => {
        setSelectedJenisPajak(event.target.value);
    };

    const handlesJenisIuranChange = (event) => {
        setSelectedJenisIuran(event.target.value);
    };

    const handleSelectedWilayah = (event) => {
        setSelectedWilayah(event.target.value);
    };

    const handleJumlahPemasukan = (event) => {
        setjumlahPemasukan(Number(event.target.value));
    }

    const handleInputButtonClick = () => {
        const token = getCookie('token');
        const url = process.env.NEXT_PUBLIC_TEST_API_URL + '/pajak/input-pemasukan';

        const postData = {
            tipePajak: tipePajak[selectedTipePajak],
            jenisPajak: selectedTipePajak == '0' ? jenisPajak[selectedJenisPajak] : selectedTipePajak == '1' ? jenisPajakDaerah[selectedJenisPajak] : jenisNonPajak[selectedJenisPajak],
            wilayah: listWilayah[selectedWilayah],
            jumlah: jumlahPemasukan,
            tanggal: getCurrentDate(),
        };
        postRequest(url, postData, token)
    };

    const postRequest = async (url, postData, token) => {
        console.log('a')
        try {
            const res = await axios.post(url, postData, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            });
            setResponse(res.data.message);
        } catch (err) {
            setResponse(err.data.message);
        }
    };

    

    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
    }, []);
   
    return(
       <div className="dashboard-page">
            <form className="d-flex flex-column row-gap-3">
                <div className="input-container">
                    <span className="form-title"><b>Tipe Penerimaan</b></span>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-list-stars"></i></span>
                        <select className="form-select"  onChange={handelTipePajakChange} value={selectedTipePajak}>
                                <option value="">Pilih Tipe</option>
                                {tipePajak.map((tipe, index) =>  <option value={index} >{tipe}</option>)}
                        </select>
                    </div>
                </div>

                <div className="input-container">
                    <span className="form-title"><b>Jenis Pajak</b></span>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-list-stars"></i></span>
                        <select className="form-select" onChange={handleJenisPajakChange} disabled={!selectedTipePajak} value={selectedJenisPajak}>
                            <option value="">Pilih Jenis Pajak</option>
                            {selectedTipePajak === '0' && (
                               jenisPajak.map((tipe, index) => (
                                <option key={index} value={index}>{tipe}</option>
                                ))
                            )}

                            {selectedTipePajak === '1' && (
                                 jenisPajakDaerah.map((tipe, index) => (
                                    <option key={index} value={index}>{tipe}</option>
                                ))
                            )}

                            {selectedTipePajak === '2' && (
                                jenisNonPajak.map((tipe, index) => (
                                    <option key={index} value={index}>{tipe}</option>
                                ))
                            )}
                            
                        </select>
                    </div>
                </div>

                {selectedJenisPajak == '4' &&
                <div className="input-container" >
                    <span className="form-title"><b>Sub Iuran</b></span>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-list-stars"></i></span>
                        <select className="form-select" onChange={handlesJenisIuranChange} value={selectedJenisIuran}>
                            <option value="">Pilih Sub Iuran</option>
                            {subIuran.map((tipe, index) =>  <option value={index} >{tipe}</option>)}
                        </select>
                    </div>
                </div>
                }

                <div className="input-container">
                    <span className="form-title"><b>Wilayah Setoran</b></span>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-list-stars"></i></span>
                        <select className="form-select" disabled={!selectedJenisPajak} onChange={handleSelectedWilayah}>
                            <option value="">Pilih Wilayah</option>
                            {listWilayah.map((tipe, index) =>  <option value={index} >{tipe}</option>)}
                        </select>
                    </div>
                </div>


                <div className="input-container">
                    <span className="form-title"><b>Jumlah Pemasukan</b></span>
                    <div className="input-group">
                        <span className="input-group-text" id="basic-addon1"><i className="bi bi-list-stars"></i></span>
                        <input type="number" className="form-control" placeholder="1000000" disabled={!selectedWilayah} onChange={handleJumlahPemasukan} value={jumlahPemasukan}/>
                    </div>
                </div>

                <div className="input-container">
                    <span className="form-title"><b></b></span>
                    <div className="input-group">
                        <button type="button" className="btn btn-primary" onClick={handleInputButtonClick} data-bs-toggle="modal"
                        data-bs-target="#exampleModal" disabled={jumlahPemasukan <= 0}>Input Pemasukan<i className="bi bi-box-arrow-in-right"></i></button>
                    </div>
                </div>
             
            </form>
      
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