import React, { useState } from 'react'
import Header from '../components/Header';
import backArrowIcon from '../assets/backArrowIcon.png';
import NavigasiAkun from '../components/NavigasiAkun';
import { Link, Outlet} from "react-router-dom";
import BottomNav from '../components/BottomNav';

const AccountSetings = () => {


  return (
    <div>
    <Header/>
        <div className='container pb-5 m-0 m-auto text-start'>
        <button onClick={() => window.location.href = "/"} className='bg-transparent text-primary'><img src={backArrowIcon}/>Kembali ke Beranda</button>
        <div className='pb-5 mb-4' style={{border: "1px solid #6148FF"}}>
            <h5 className='text-center text-white' style={{backgroundColor: "#6148FF", borderRadius: "10px 10px 0 0"}}>Akun</h5>
            <div className='d-flex flex-column flex-md-row w-100 justify-content-md-between justify-content-center'>
                <NavigasiAkun/>

                <Outlet/>
            </div>
        </div>
        </div>
        <BottomNav/>
    </div>
  )
}

export default AccountSetings;