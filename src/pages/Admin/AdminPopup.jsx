import React, { useState } from "react";
import axios from "axios";

function AdminPopupTambah() {
  const [courseData, setCourseData] = useState({
    author: "",
    name: "",
    category: "",
    code: "",
    type: "",
    level: "",
    price: "",
    link: "",
    description: "",
    intendeds: [""],
  });

  const handleChange = (e, index) => {
    const { id, value } = e.target;
    if (id.startsWith("intended-")) {
      const newIntendeds = [...courseData.intendeds];
      const intendedIndex = parseInt(id.split("-")[1], 10);
      newIntendeds[intendedIndex] = value;
      setCourseData({ ...courseData, intendeds: newIntendeds });
    } else {
      setCourseData({ ...courseData, [id]: value });
    }
  };
  const handleAddIntended = () => {
    setCourseData({ ...courseData, intendeds: [...courseData.intendeds, ""] });
  };
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://course-in-production.up.railway.app/api/v1/courses",
        courseData,
        {
          headers: {
            Accept: "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJhZG1pbjEyMyIsImlhdCI6MTcwMjYzNjQ3MywiZXhwIjoxNzAzMjQxMjczfQ.8FIRyYsWtihb87gqae4x9AEVJd7nfzn9woIflxUAbTA",
            "Content-Type": "application/json",
          },
        }
      );

      console.log("Berhasil:", response.data);
      window.location.reload();
      // Handle success, e.g., update component state or display success message
    } catch (error) {
      console.error("Gagal:", error.response.data);
      // Handle failure, e.g., display error message
    }
  };

  return (
    <>
      <div
        className="modal fade"
        id="exampleModalToggle"
        aria-hidden="true"
        aria-labelledby="exampleModalToggleLabel"
        tabIndex="-1"
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ maxWidth: "80%" }}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1
                className="modal-title fs-5"
                id="exampleModalToggleLabel"
                style={{
                  color: "#6148FF",
                  fontSize: "30px",
                  fontWeight: "700",
                  paddingLeft: "45%",
                }}
              >
                Tambah Kelas
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div
              className="modal-body"
              style={{
                fontSize: "12px",
                paddingLeft: "200px",
                color: "#000",
                fontWeight: "600",
              }}
            >
              <div className="mb-1">
                <label htmlFor="name" className="form-label">
                  Nama Kelas
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  value={courseData.name}
                  onChange={handleChange}
                  placeholder="Text"
                  style={{ width: "80%", height: "50px", borderRadius: "15px" }}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="author"
                  value={courseData.author}
                  onChange={handleChange}
                  placeholder="Text"
                  style={{ width: "80%", height: "50px", borderRadius: "15px" }}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="category" className="form-label">
                  category
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="category"
                  value={courseData.category}
                  onChange={handleChange}
                  placeholder="Text"
                  style={{ width: "80%", height: "50px", borderRadius: "15px" }}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="code" className="form-label">
                  Kode Kelas
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="code"
                  value={courseData.code}
                  onChange={handleChange}
                  placeholder="Text"
                  style={{ width: "80%", height: "50px", borderRadius: "15px" }}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="type" className="form-label">
                  Tipe Kelas
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="type"
                  value={courseData.type}
                  onChange={handleChange}
                  placeholder="Text"
                  style={{ width: "80%", height: "50px", borderRadius: "15px" }}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="level" className="form-label">
                  Level
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="level"
                  value={courseData.level}
                  onChange={handleChange}
                  placeholder="Text"
                  style={{ width: "80%", height: "50px", borderRadius: "15px" }}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="price" className="form-label">
                  price
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="price"
                  value={courseData.price}
                  onChange={handleChange}
                  placeholder="Text"
                  style={{ width: "80%", height: "50px", borderRadius: "15px" }}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="link" className="form-label">
                  Link Video
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="link"
                  value={courseData.link}
                  onChange={handleChange}
                  placeholder="Text"
                  style={{ width: "80%", height: "50px", borderRadius: "15px" }}
                />
              </div>
              <div className="mb-1">
                <label htmlFor="description" className="form-label">
                  Deskripsi
                </label>
                <textarea
                  className="form-control"
                  id="description"
                  rows="3"
                  placeholder="Paragraph"
                  style={{
                    width: "80%",
                    height: "150px",
                    borderRadius: "15px",
                  }}
                  value={courseData.description}
                  onChange={handleChange}
                ></textarea>
              </div>
              <div className="mb-1">
                <label htmlFor="intendeds" className="form-label">
                  Intendeds
                </label>
                {courseData.intendeds.map((intended, index) => (
                  <div key={index} className="mb-1">
                    <input
                      type="text"
                      value={intended}
                      id={`intended-${index}`}
                      onChange={(e) => handleChange(e, index)}
                      placeholder="Text"
                      style={{
                        width: "80%",
                        height: "50px",
                        borderRadius: "15px",
                      }}
                      className="form-control"
                    />
                  </div>
                ))}
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={handleAddIntended}
                  style={{ marginLeft: "10px" }}
                >
                  Add Intended
                </button>
              </div>
            </div>
            <div
              className="modal-footer"
              style={{ display: "flex", justifyContent: "center" }}
            >
              <button
                type="button"
                className="btn "
                onClick={handleSubmit}
                style={{
                  width: "29%",
                  backgroundColor: "#6148FF",
                  color: "#fff",
                  height: "60px",
                  fontSize: "20px",
                  fontWeight: "600",
                  borderRadius: "999px",
                }}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPopupTambah;
