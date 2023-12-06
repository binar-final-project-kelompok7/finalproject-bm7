import React from 'react'
import './PaymentHistory.css'
import classImage from '../assets/classImage.png'

const PaymentHistory = () => {
  return (
    <div className='d-flex flex-column gap-4 mx-auto pt-4'>
        <div className="payment d-flex flex-column text-start" >
          <img src={classImage} alt="" />
          <h5>UI/UX Design</h5>
          <h5>Belajar Web Designer dengan Figma by Angela Doe</h5>
          <div className="d-flex flex-wrap gap-3">
            <div className="">
              <p>Intermediate Level</p>
            </div>
            <div className="">
              <p>10 Modul</p>
            </div>
            <div className="">
              <p>120 Menit</p>
            </div>
          </div>
          <button className="rounded-5 text-white">
            Paid
          </button>
        </div>

        <div className="payment d-flex flex-column text-start">
          <img src={classImage} alt="" />
          <h5>UI/UX Design</h5>
          <h5>Belajar Web Designer dengan Figma by Angela Doe</h5>
          <div className="d-flex flex-wrap gap-3">
            <div className="">
              <p>Intermediate Level</p>
            </div>
            <div className="">
              <p>10 Modul</p>
            </div>
            <div className="">
              <p>120 Menit</p>
            </div>
          </div>
          <button className="rounded-5 text-white">
            Paid
          </button>
        </div>
    </div>
  )
}

export default PaymentHistory;