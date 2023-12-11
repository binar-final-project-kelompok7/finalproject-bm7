import React from 'react'
import './ChangePassword.css'

const ChangePassword = () => {
  return (
    <div className='containerChangePass d-flex flex-column mx-auto pt-4'>
        <h2 className='text-center'>Ubah Password</h2>
        <form action="" className='d-flex flex-column text-start'>
            <label className='mt-3' htmlFor="" style={{fontSize: '12px'}}>Masukkan Password Lama</label>
            <input className='bg-transparent text-black rounded-3 border-1' type="password" />
            <label className='mt-3' htmlFor="" style={{fontSize: '12px'}}>Masukkan Password Baru</label>
            <input className='bg-transparent text-black rounded-3 border-1' type="password" />
            <label className='mt-3' htmlFor="" style={{fontSize: '12px'}}>Ulangi Password Baru</label>
            <input className='bg-transparent text-black rounded-3 border-1' type="password" />
            <button className='changePassButton rounded-5 my-4 text-white'>Ubah Password</button>
        </form>
    </div>
  )
}

export default ChangePassword;