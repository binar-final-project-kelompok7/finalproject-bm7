import React from 'react'
import profile from "../assets/profileIcon.png"
import './ProfileSaya.css'

const ProfileSaya = () => {
  return (
    <div className='containerMyProfile d-flex flex-column w-md-50 mx-auto pt-4'>
        <img className='rounded-circle mx-auto' src={profile} alt="" />
        <form action="" className='d-flex flex-column text-start'>
            <label htmlFor="">Nama</label>
            <input type="text" className='bg-transparent text-black'/>
            <label htmlFor="">Email</label>
            <input type="text" className='bg-transparent text-black' />
            <label htmlFor="">Nomor Telepon</label>
            <input type="text" className='bg-transparent text-black' />
            <label htmlFor="">Negara</label>
            <input type="text" className='bg-transparent text-black' />
            <label htmlFor="">Kota</label>
            <input type="text" className='bg-transparent text-black' />
            <button className='buttonSave rounded-5 text-white my-4'>Simpan Profil Saya</button>
        </form>
    </div>
  )
}

export default ProfileSaya;