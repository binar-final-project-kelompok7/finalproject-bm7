import React from 'react'
import homeIcon from "../assets/homeIcon.png";
import classIcon from "../assets/classIcon.png";
import courseIcon from "../assets/courseIcon.png";
import profileIcon from "../assets/profileIcon.png";

const BottomNav = () => {
  return (
    <div>
        <div className="mobileNav d-flex d-block d-sm-none bg-white text-center" style={{position: "fixed", bottom: "0", left: "0", width: "100%"}}>
            <div onClick={() => window.location.href = '/'} className='w-25'>
              <img src={homeIcon} alt="" />
              <p>Beranda</p>
            </div>
            <div onClick={() => window.location.href = '/myclass'} className='w-25'>
              <img src={classIcon} alt="" />
              <p>Kelas</p>
            </div>
            <div onClick={() => window.location.href = '/course'} className='w-25'>
              <img src={courseIcon} alt="" />
              <p>Kursus</p>
            </div>
            <div onClick={() => window.location.href = '/account-settings'} className='w-25'>
              <img src={profileIcon} alt="" />
              <p>Akun</p>
            </div>
        </div>
    </div>
  )
}

export default BottomNav