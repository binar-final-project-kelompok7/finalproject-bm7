import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuthGuard from "./AdminAuthCheck";

function AdminPopupUpdate({ courseCode }) {
  const { authToken } = useAuthGuard();
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

  useEffect(() => {
    const fetchCourseDetails = async () => {
      try {
        const response = await axios.get(`https://course-in-production.up.railway.app/api/v1/courses/${courseCode}`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        });

        const fetchedCourseData = response.data.data;

        // Update course data
        setCourseData({
          author: fetchedCourseData.author,
          name: fetchedCourseData.name,
          category: fetchedCourseData.category,
          code: fetchedCourseData.code,
          type: fetchedCourseData.type,
          level: fetchedCourseData.level,
          price: fetchedCourseData.price,
          link: fetchedCourseData.link,
          description: fetchedCourseData.description,
          intendeds: fetchedCourseData.intendeds || [""],
        });
      } catch (error) {
        console.error("Failed to fetch course details:", error);
      }
    };
    fetchCourseDetails();
  }, [courseCode, authToken]);

  const handleChange = (e) => {
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
      const response = await axios.patch(`https://course-in-production.up.railway.app/api/v1/courses/${courseCode}`, courseData, {
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      });

      console.log("Berhasil:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Gagal:", error.response.data);
    }
  };

  const categories = ["UIUX_DESIGN", "WEB_DEVELOPMENT", "ANDROID_DEVELOPMENT", "DATA_SCIENCE", "BUSINESS_INTELLIGENCE"];
  const levels = ["BEGINNER", "INTERMEDIATE", "ADVANCED"];
  const types = ["FREE", "PREMIUM"];

  return (
    <>
      <button style={{ backgroundColor: "#6148FF", fontSize: "10px" }} className="text-white rounded-5 py-1 px-2" data-bs-toggle="modal" href={`#exampleModalToggle-${courseCode}`} role="button">
        Ubah
      </button>
      <div className="modal fade" id={`exampleModalToggle-${courseCode}`} aria-hidden="true" aria-labelledby={`exampleModalToggleLabel-${courseCode}`} tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered" style={{ maxWidth: "80%" }}>
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalToggleLabel" style={{ color: "#6148FF", fontSize: "30px", fontWeight: "700", paddingLeft: "45%" }}>
                Ubah Kelas
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body" style={{ fontSize: "12px", paddingLeft: "200px", color: "#000", fontWeight: "600" }}>
              <div className="mb-1">
                <label htmlFor="name" className="form-label">
                  Nama Kelas
                </label>
                <input type="text" className="form-control" id="name" value={courseData.name} onChange={handleChange} placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="author" className="form-label">
                  Author
                </label>
                <input type="text" className="form-control" id="author" value={courseData.author} onChange={handleChange} placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="category" className="form-label">
                  category
                </label>
                <select className="form-select" aria-label="Default select example" id="category" value={courseData.category} onChange={(e) => setCourseData({ ...courseData, category: e.target.value })}>
                  <option>Pilih Category</option>
                  {categories.map((category, index) => (
                    <option value={category} key={index}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-1">
                <label htmlFor="code" className="form-label">
                  Kode Kelas
                </label>
                <input type="text" className="form-control" id="code" value={courseData.code} onChange={handleChange} placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="type" className="form-label">
                  Tipe Kelas
                </label>
                <select className="form-select" aria-label="Default select example" id="type" value={courseData.type} onChange={(e) => setCourseData({ ...courseData, type: e.target.value })}>
                  <option>Pilih Tipe Kelas</option>
                  {types.map((type, index) => (
                    <option value={type} key={index}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-1">
                <label htmlFor="level" className="form-label">
                  Level
                </label>
                <select className="form-select" aria-label="Default select example" id="level" value={courseData.level} onChange={(e) => setCourseData({ ...courseData, level: e.target.value })}>
                  <option>Pilih Level Kelas</option>
                  {levels.map((level, index) => (
                    <option value={level} key={index}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mb-1">
                <label htmlFor="price" className="form-label">
                  price
                </label>
                <input type="text" className="form-control" id="price" value={courseData.price} onChange={handleChange} placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="link" className="form-label">
                  Link Video
                </label>
                <input type="text" className="form-control" id="link" value={courseData.link} onChange={handleChange} placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} />
              </div>
              <div className="mb-1">
                <label htmlFor="description" className="form-label">
                  Deskripsi
                </label>
                <textarea className="form-control" id="description" rows="3" placeholder="Paragraph" style={{ width: "80%", height: "150px", borderRadius: "15px" }} value={courseData.description} onChange={handleChange}></textarea>
              </div>
              <div className="mb-1">
                <label htmlFor="intendeds" className="form-label">
                  Intendeds
                </label>
                {courseData.intendeds.map((intended, index) => (
                  <div key={index} className="mb-1">
                    <input type="text" value={intended} id={`intended-${index}`} onChange={(e) => handleChange(e, index)} placeholder="Text" style={{ width: "80%", height: "50px", borderRadius: "15px" }} className="form-control" />
                  </div>
                ))}
                <button type="button" className="btn btn-outline-secondary" onClick={handleAddIntended} style={{ marginLeft: "10px" }}>
                  Add Intended
                </button>
              </div>
            </div>
            <div className="modal-footer" style={{ display: "flex", justifyContent: "center" }}>
              <button type="button" className="btn " onClick={handleSubmit} style={{ width: "29%", backgroundColor: "#6148FF", color: "#fff", height: "60px", fontSize: "20px", fontWeight: "600", borderRadius: "999px" }}>
                Simpan
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminPopupUpdate;
