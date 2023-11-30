import React from 'react'
import { NavLink } from 'react-router-dom';

const NavigasiAdmin = () => {
  return (
    <div className='containerNavAdmin d-flex flex-column w-25 bg-primary text-center' style={{height: '100vh'}}>
        <h1 className="bg-primary text-white m-0 py-5">CourseIn</h1>
        <nav className='d-flex flex-column'>
            <NavLink className="py-2 bg-primary text-white text-decoration-none" to="">Dashboard</NavLink>
            <NavLink className="py-2 bg-primary text-white text-decoration-none" to="">Kelola Kelas</NavLink>
            <NavLink className="py-2 bg-primary text-white text-decoration-none" to="">Keluar</NavLink>
        </nav>
    </div>
  )
}

export default NavigasiAdmin;