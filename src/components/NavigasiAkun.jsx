import React from 'react'
import editProfile from "../assets/editProfileIcon.png";
import changePassIcon from "../assets/changePassIcon.png";
import purchaseIcon from "../assets/purchaseIcon.png";
import logoutIcon from "../assets/logoutIcon.png";
import { NavLink } from 'react-router-dom';
import './NavigasiAkun.css'

const NavigasiAkun = ({onTabChange}) => {
  return (
    <div className='d-flex flex-row flex-md-column w-50 text-start ps-5 pt-4 gap-4'>
        <NavLink to="/account-settings/edit-profile" className={({isActive}) => !isActive ? 'notActive text-decoration-none d-flex align-items-md-center align-items-start text-black' : 'active text-decoration-none d-flex align-items-md-center align-items-start'}><img className='me-3' src={editProfile}/><p className='d-none d-md-block mb-0' style={{fontWeight: '400'}}>Profil Saya</p></NavLink>
        <NavLink to="/account-settings/change-password" className={({isActive}) => !isActive ? 'notActive text-decoration-none d-flex align-items-md-center align-items-start text-black' : 'active text-decoration-none d-flex align-items-md-center align-items-start'}><img className='me-3' src={changePassIcon}/><p className='d-none d-md-block mb-0' style={{fontWeight: '400'}}>Ubah Password</p></NavLink>
        <NavLink to="/account-settings/payment-history" className={({isActive}) => !isActive ? 'notActive text-decoration-none d-flex align-items-md-center align-items-start text-black' : 'active text-decoration-none d-flex align-items-md-center align-items-start'}><img className='me-3' src={purchaseIcon}/><p className='d-none d-md-block mb-0' style={{fontWeight: '400'}}>Riwayat Pembayaran</p></NavLink>
        <NavLink to="/" className={({isActive}) => !isActive ? 'notActive text-decoration-none d-flex align-items-md-center align-items-start text-black' : 'active text-decoration-none d-flex align-items-md-center align-items-start'}><img className='me-3' src={logoutIcon}/><p className='d-none d-md-block mb-0'>Keluar</p></NavLink>
    </div>
  )
}

export default NavigasiAkun;