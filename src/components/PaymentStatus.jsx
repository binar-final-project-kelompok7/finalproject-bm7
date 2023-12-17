import React from "react";
import SearchIcon from "../assets/searchIcon2.png";
import filterIcon from "../assets/filterIcon.png"

const PaymentStatus = () => {

  const PaymentStatusData = [
    { id: 'johndoe', category: 'UI/UX Design', className: 'Belajar Web Designer dengan Figma', status: true, paymentMethod: 'Credit Card ', paymentDate: '1 Dec, 2023'},
    { id: 'superman', category: 'Data Science', className: 'Data Cleaning untuk pemula', status: false, paymentMethod: '- ', paymentDate: '-'},
    { id: 'ironman', category: 'Data Science', className: 'Data Cleaning untuk Professional', status: true, paymentMethod: 'Credit Card ', paymentDate: '1 Dec, 2023'},
    { id: 'loki', category: 'Product Management', className: 'Scrum dalam tim kompleks', status: true, paymentMethod: 'Credit Card ', paymentDate: '1 Dec, 2023'},
    { id: 'freepalestine', category: 'Product Management', className: 'Penerapan manajemen Agile', status: false, paymentMethod: '- ', paymentDate: '-'},
    { id: 'siapa', category: 'Android Development', className: 'Mengenal Android Studio', status: false, paymentMethod: '- ', paymentDate: '-'},
    { id: 'humanity', category: 'Product Management', className: 'CSS dan HTML dalam seminggu', status: true, paymentMethod: 'Credit Card ', paymentDate: '1 Dec, 2023'},
  ];

  return (
    <div className="mx-auto mt-5" style={{ width: "90%"}}>
      <div className="d-flex justify-content-between">
        <h3>Status Pembayaran</h3>
        <div className="d-flex align-items-center gap-3">
        <button style={{border: '1px solid #6148FF', color: '#6148FF'}} className="rounded-5 py-1 px-3 d-flex gap-2 align-items-center fw-bold"><img src={filterIcon}/>Filter</button>
          <img src={SearchIcon}/>
        </div>
      </div>
      <div style={{ overflowY: 'auto', maxHeight: '300px' }}>
      <table>
        <thead>
          <tr style={{fontSize: '14px'}}>
            <th className="p-2">ID</th>
            <th className="p-2">Kategori</th>
            <th className="p-2">Kelas Premium</th>
            <th className="p-2">Status</th>
            <th className="p-2">Metode Pembayaran</th>
            <th className="p-2">Tanggal Bayar</th>
          </tr>
        </thead>
        
        <tbody>
          {PaymentStatusData.map((payment, id) => (
          <tr style={{fontSize: '13px'}} key={id}>
            <td className="p-2">{payment.id}</td>
            <td className="p-2">{payment.category}</td>
            <td className="p-2">{payment.className}</td>
            <td className={payment.status ? 'text-success p-2' : 'text-danger p-2'}>{payment.status ? 'Sudah Bayar' : 'Belum Bayar'}</td>
            <td className="p-2">{payment.paymentMethod}</td>
            <td className="p-2">{payment.paymentDate}</td>
            </tr>
            ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default PaymentStatus;
