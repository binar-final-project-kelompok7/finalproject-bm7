import React, { useState } from "react";
import SearchIcon from "../../assets/searchIcon2.png";
import addIcon from "../../assets/addIcon.png";
import filterIcon from "../../assets/filterIcon.png";
import AdminPopup from "./AdminPopup";

const ManageClass = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const paymentData = [
    {
      id: "UIUX0123",
      category: "UI/UX Design",
      className: "Belajar Web Designer dengan Figma",
      typeClass: "GRATIS",
      level: "Beginner ",
      classPrice: "Rp. 0",
    },
    {
      id: "DS0223",
      category: "Data Science",
      className: "Data Cleaning untuk pemula",
      typeClass: "GRATIS",
      level: "Beginner ",
      classPrice: "Rp. 0",
    },
    {
      id: "DS0223",
      category: "Data Science",
      className: "Data Cleaning untuk Professional",
      typeClass: "PREMIUM",
      level: "Advanced ",
      classPrice: "Rp 199,000",
    },
    {
      id: "PM0123",
      category: "Product Management",
      className: "Scrum dalam tim kompleks",
      typeClass: "PREMIUM",
      level: "Intermediate ",
      classPrice: "Rp 299,000",
    },
    {
      id: "PM0123",
      category: "Product Management",
      className: "Penerapan manajemen Agile",
      typeClass: "PREMIUM",
      level: "Advanced ",
      classPrice: "Rp 349,000",
    },
    {
      id: "AD1023",
      category: "Android Development",
      className: "Mengenal Android Studio",
      typeClass: "GRATIS",
      level: "Beginner ",
      classPrice: "Rp. 0",
    },
    {
      id: "PM0123",
      category: "Product Management",
      className: "CSS dan HTML dalam seminggu",
      typeClass: "GRATIS",
      level: "Beginner ",
      classPrice: "Rp. 0",
    },
  ];

  return (
    <div className="mx-auto mt-5" style={{ width: "80%"}}>
      <div className="d-flex justify-content-between">
        <h3>Kelola Kelas</h3>
        <div className="d-flex align-items-center gap-3">
        <button
            style={{ backgroundColor: "#6148FF" }}
            className="rounded-5 py-1 px-3 text-white d-flex gap-2 align-items-center"data-bs-toggle="modal" href="#exampleModalToggle" role="button" 
            onClick={() => setPopupOpen(true)} 
          >
            <img src={addIcon} alt="Add Icon" />
            Tambah
          </button>
          <button style={{border: '1px solid #6148FF', color: '#6148FF'}} className="rounded-5 py-1 px-3 d-flex gap-2 align-items-center fw-bold"><img src={filterIcon}/>Filter</button>
          <img src={SearchIcon}/>
        </div>
      </div>
      {isPopupOpen && <AdminPopup closeModal={() => setPopupOpen(false)} />}
      <div style={{overflowY: 'auto', height: '300px'}}>
      <table>
        <thead>
          <tr style={{fontSize: '14px'}}>
            <th className="p-2">Kode Kelas</th>
            <th className="p-2">Kategori</th>
            <th className="p-2">Nama Kelas</th>
            <th className="p-2">Tipe Kelas</th>
            <th className="p-2">Level</th>
            <th className="p-2">Harga Kelas</th>
            <th className="p-2">Aksi</th>
          </tr>
        </thead>

        <tbody>
          {paymentData.map((payment, id) => (
          <tr style={{fontSize: '13px'}} key={id}>
            <td className="p-2">{payment.id}</td>
            <td className="p-2">{payment.category}</td>
            <td className="p-2">{payment.className}</td>
            <td className="p-2">{payment.typeClass}</td>
            <td className="p-2">{payment.level}</td>
            <td className="p-2">{payment.classPrice}</td>
            <td className="p-2 d-flex gap-2"><button style={{backgroundColor: '#6148FF', fontSize: '10px'}} className="text-white rounded-5 py-1 px-2">Ubah</button> <button style={{fontSize: '10px', backgroundColor: '#FF0000'}} className="text-white rounded-5 py-1 px-2">Hapus</button> </td>
         </tr>
          ))}
        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ManageClass;
