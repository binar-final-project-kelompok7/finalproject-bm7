import React, { useState, useEffect } from "react";
import SearchIcon from "../../assets/searchIcon2.png";
import addIcon from "../../assets/addIcon.png";
import filterIcon from "../../assets/filterIcon.png";
import AdminPopup from "./AdminPopup";

const ManageClass = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [courseData, setCourseData] = useState([]);

  useEffect(() => {
    // Fetch data from the API
    fetch(
      "https://course-in-production.up.railway.app/api/v1/courses?page=0&size=10"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data.data);
        setCourseData(data.data);
      })
      .catch((error) => console.error("Error fetching data:", error));
  }, []);
  return (
    <div className="mx-auto mt-5" style={{ width: "80%" }}>
      <div className="d-flex justify-content-between">
        <h3>Kelola Kelas</h3>
        <div className="d-flex align-items-center gap-3">
          <button
            style={{ backgroundColor: "#6148FF" }}
            className="rounded-5 py-1 px-3 text-white d-flex gap-2 align-items-center"
            data-bs-toggle="modal"
            href="#exampleModalToggle"
            role="button"
            onClick={() => setPopupOpen(true)}
          >
            <img src={addIcon} alt="Add Icon" />
            Tambah
          </button>
          <button
            style={{ border: "1px solid #6148FF", color: "#6148FF" }}
            className="rounded-5 py-1 px-3 d-flex gap-2 align-items-center fw-bold"
          >
            <img src={filterIcon} />
            Filter
          </button>
          <img src={SearchIcon} />
        </div>
      </div>
      {isPopupOpen && <AdminPopup closeModal={() => setPopupOpen(false)} />}
      <div style={{ overflowY: "auto", height: "300px" }}>
        <table>
          <thead>
            <tr style={{ fontSize: "14px" }}>
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
            {courseData.map((course, id) => (
              <tr style={{ fontSize: "13px" }} key={id}>
                <td className="p-2">{course.code}</td>
                <td className="p-2">{course.category}</td>
                <td className="p-2">{course.name}</td>
                <td className="p-2">{course.type}</td>
                <td className="p-2">{course.level}</td>
                <td className="p-2">{course.price}</td>
                <td className="p-2 d-flex gap-2">
                  <button
                    style={{ backgroundColor: "#6148FF", fontSize: "10px" }}
                    className="text-white rounded-5 py-1 px-2"
                  >
                    Ubah
                  </button>{" "}
                  <button
                    style={{ fontSize: "10px", backgroundColor: "#FF0000" }}
                    className="text-white rounded-5 py-1 px-2"
                  >
                    Hapus
                  </button>{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageClass;
