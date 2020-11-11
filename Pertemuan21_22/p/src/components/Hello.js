import React from 'react';
import {cekHari,cekTahun} from '../utils/waktu';

const Hello = ()=>{
    return (
      <>
    <p>Hello, Selamat datang di kelas Web Programming</p>
    <p>Tahun sekarang adalah {cekTahun()}</p>
    <p>Tanggal sekarang adalah {cekHari()}</p>
    </>
    );
    }

    export default Hello;