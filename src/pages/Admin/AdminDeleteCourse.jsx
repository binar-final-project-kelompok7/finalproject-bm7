import React from "react";
import axios from "axios";
import useAuthGuard from "./AdminAuthCheck";

const DeleteCourse = ({ courseCode }) => {
  const { authToken } = useAuthGuard();
  const handleDelete = async () => {
    try {
      const apiUrl = `https://course-in-production.up.railway.app/api/v1/courses/delete/${courseCode}`;
      const headers = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`,
      };

      const response = await axios.delete(apiUrl, { headers });

      console.log("Course deleted successfully:", response.data);
      window.location.reload();
    } catch (error) {
      console.error("Error deleting course:", error);
    }
  };

  return (
    <button style={{ fontSize: "10px", backgroundColor: "#FF0000" }} className="text-white rounded-5 py-1 px-2" onClick={handleDelete}>
      Hapus
    </button>
  );
};

export default DeleteCourse;
