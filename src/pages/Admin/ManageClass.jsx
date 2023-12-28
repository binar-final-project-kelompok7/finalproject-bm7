import React, { useEffect, useState } from "react";
import SearchIcon from "../../assets/searchIcon2.png";
import addIcon from "../../assets/addIcon.png";
import filterIcon from "../../assets/filterIcon.png";
import AdminPopupTambah from "./AdminPopup";
import axios from "axios";
import AdminPopupUpdate from "./UpdatesCourses";
import DeleteCourse from "./AdminDeleteCourse";
import useAuthGuard from "./AdminAuthCheck";

const ManageClass = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [courses, setCourses] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const { authToken } = useAuthGuard();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://course-in-production.up.railway.app/api/v1/courses?page=${currentPage - 1}&size=5`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        });

        setCourses(response.data.data);
        setTotalPages(response.data.paging.totalPage);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    fetchData();
  }, [authToken, currentPage]);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="mx-auto mt-5" style={{ width: "80%" }}>
      <div className="d-flex justify-content-between">
        <h3>Kelola Kelas</h3>
        <div className="d-flex align-items-center gap-3">
          <button style={{ backgroundColor: "#6148FF" }} className="rounded-5 py-1 px-3 text-white d-flex gap-2 align-items-center" data-bs-toggle="modal" href="#exampleModalToggle" role="button" onClick={() => setPopupOpen(true)}>
            <img src={addIcon} alt="Add Icon" />
            Tambah
          </button>
          <button style={{ border: "1px solid #6148FF", color: "#6148FF" }} className="rounded-5 py-1 px-3 d-flex gap-2 align-items-center fw-bold">
            <img src={filterIcon} />
            Filter
          </button>
          <img src={SearchIcon} />
        </div>
      </div>
      <div style={{ overflowY: "auto", height: "300px" }}>
        <table>
          <thead>
            <tr style={{ fontSize: "14px" }}>
              <th className="p-2">Kode Kelas</th>
              <th className="p-2">Kategori</th>
              <th className="p-2">Author Kelas</th>
              <th className="p-2">Nama Kelas</th>
              <th className="p-2">Tipe Kelas</th>
              <th className="p-2">Level</th>
              <th className="p-2">Harga Kelas</th>
              <th className="p-2">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {courses.map((course) => (
              <tr style={{ fontSize: "13px" }} key={course.code}>
                <td className="p-2">{course.code}</td>
                <td className="p-2">{course.category}</td>
                <td className="p-2">{course.author}</td>
                <td className="p-2">{course.name}</td>
                <td className="p-2">{course.type}</td>
                <td className="p-2">{course.level}</td>
                <td className="p-2">{course.price}</td>
                <td className="p-2 d-flex gap-2">
                  <AdminPopupUpdate courseCode={course.code} />
                  <DeleteCourse courseCode={course.code} />
                </td>
              </tr>
            ))}
          </tbody>
          {isPopupOpen && <AdminPopupTambah closeModal={() => setPopupOpen(false)} />}
        </table>
      </div>
      <div className="mt-3 d-flex justify-content-center align-items-center">
        <button onClick={() => handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        <span className="mx-2">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => handlePageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ManageClass;
