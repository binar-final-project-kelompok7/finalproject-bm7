import React from "react";
import SearchIcon from "../assets/searchIcon2.png";

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
    <div className="mx-auto mt-5" style={{ width: "80%"}}>
      <div className="d-flex justify-content-between">
        <h3>Status Pembayaran</h3>
        <div className="d-flex align-items-center">
          <button>Filter</button>
          <img src={SearchIcon} alt="" />
        </div>
      </div>
      <div style={{overflowY: 'auto', height: '300px'}}>
      <table>
        <tr>
          <th className="p-2">ID</th>
          <th className="p-2">Kategori</th>
          <th className="p-2">Kelas Premium</th>
          <th className="p-2">Status</th>
          <th className="p-2">Metode Pembayaran</th>
          <th className="p-2">Tanggal Bayar</th>
        </tr>

        {PaymentStatusData.map((payment, id) => (
        <tr key={id}>
          <td className="p-2">{payment.id}</td>
          <td className="p-2">{payment.category}</td>
          <td className="p-2">{payment.className}</td>
          <td className={payment.status ? 'text-success p-2' : 'text-danger p-2'}>{payment.status ? 'Sudah Bayar' : 'Belum Bayar'}</td>
          <td className="p-2">{payment.paymentMethod}</td>
          <td className="p-2">{payment.paymentDate}</td>
        </tr>
        ))}
      </table>
      </div>
    </div>
  );
};

export default PaymentStatus;
