import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

function StartStudy() {
  const { courseCode } = useParams();
  const [courseData, setCourseData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://course-in-production.up.railway.app/api/v1/courses/${courseCode}`
        );
        setCourseData(response.data.data); // Assuming the API response has a 'data' property
        console.log("Course Data:", response.data.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchData();
  }, [courseCode]);

  return (
    <>
      <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content" style={{ borderRadius: "20px" }}>
            <div className="modal-header">
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {courseData ? (
                <>
                  <h2 className="title" style={{ textAlign: "center", fontWeight: "700", color: "#6148FF" }}>
                    Onboarding...<br></br>
                  </h2>
                  <div className="kotak">
                    <img src="../img/boarding.png" alt="image"></img>
                    <h7>Persiapkan hal berikut untuk belajar yang maksimal:</h7>
                    <p style={{ width: "80%", fontSize: "14px", textAlign: "center", paddingTop: "20px" }}>
                      Mempunyai akun Figma atau Install Adobe XD<br />
                      Menggunakan internet minimal kecepatan 2Mbps<br />
                      Belajar di tempat yang nyaman
                    </p>
                  </div>
                  <Link to={`/PlayVideo/${courseCode}`}>
                    <button className="buynow">Ikuti Kelas</button>
                  </Link>
                </>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default StartStudy;
