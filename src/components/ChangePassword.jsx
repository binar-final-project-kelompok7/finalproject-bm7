import React from 'react'
import './ChangePassword.css'

const ChangePassword = () => {
  return (
    <div className='containerChangePass d-flex flex-column mx-auto pt-4'>
        <h1>Ubah Password</h1>
        <form action="" className='d-flex flex-column text-start'>
            <label htmlFor="">Masukkan Password Lama</label>
            <input className='bg-transparent text-black' type="password" />
            <label htmlFor="">Masukkan Password Baru</label>
            <input className='bg-transparent text-black' type="password" />
            <label htmlFor="">Ulangi Password Baru</label>
            <input className='bg-transparent text-black' type="password" />
            <button className='changePassButton rounded-5 my-4 text-white'>Ubah Password</button>
        </form>
    </div>
  )
}

export default ChangePassword;