import React from 'react'
import profile from "../assets/profileIcon.png"
import './ProfileSaya.css'

const ProfileSaya = () => {
  return (
    <div className='containerMyProfile d-flex flex-column w-md-50 mx-auto pt-4'>
        <img className='rounded-circle mx-auto' src={profile} alt="" />
        <form action="" className='d-flex flex-column text-start'>
            <label className='mt-3' htmlFor="" style={{fontSize: '12px'}}>Nama</label>
            <input type="text" className='bg-transparent text-black rounded-3 border-1'/>
            <label className='mt-3' htmlFor="" style={{fontSize: '12px'}}>Email</label>
            <input type="text" className='bg-transparent text-black rounded-3 border-1' />
            <label className='mt-3' htmlFor="" style={{fontSize: '12px'}}>Nomor Telepon</label>
            <input type="text" className='bg-transparent text-black rounded-3 border-1' />
            <label className='mt-3' htmlFor="" style={{fontSize: '12px'}}>Negara</label>
            <input type="text" className='bg-transparent text-black rounded-3 border-1' />
            <label className='mt-3' htmlFor="" style={{fontSize: '12px'}}>Kota</label>
            <input type="text" className='bg-transparent text-black rounded-3 border-1' />
            <button className='buttonSave rounded-5 text-white mt-3'>Simpan Profil Saya</button>
        </form>
    </div>
  )
}

export default ProfileSaya;