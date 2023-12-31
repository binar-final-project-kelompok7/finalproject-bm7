import React, { useEffect, useState } from "react";
import axios from "axios";
import useAuthGuard from "../pages/Admin/AdminAuthCheck";

const PaymentStatus = () => {
  const [paymentStatusData, setPaymentStatusData] = useState([]);
  const { authToken } = useAuthGuard();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`https://coursein7.uc.r.appspot.com/api/v1/orders/dashboard?page=${currentPage - 1}&size=7`, {
          headers: {
            Accept: "application/json",
            Authorization: `Bearer ${authToken}`,
          },
        });
        setPaymentStatusData(response.data.data);
        setTotalPages(response.data.paging.totalPage);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [authToken, currentPage]);
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };
  return (
    <div className="mx-auto mt-5" style={{ width: "90%" }}>
      <div className="d-flex justify-content-between">
        <h3>Status Pembayaran</h3>
      </div>
      <div style={{ overflowY: "auto", maxHeight: "300px" }}>
        <table>
          <thead>
            <tr style={{ fontSize: "14px" }}>
              <th className="p-2">Username</th>
              <th className="p-2">Kategori</th>
              <th className="p-2">Kelas Premium</th>
              <th className="p-2">Status</th>
              {/* <th className="p-2">Metode Pembayaran</th> */}
              <th className="p-2">Tanggal Bayar</th>
            </tr>
          </thead>

          <tbody>
            {paymentStatusData.map((payment, index) => (
              <tr style={{ fontSize: "13px" }} key={index}>
                <td className="p-2">{payment.username}</td>
                <td className="p-2">{payment.category}</td>
                <td className="p-2">{payment.courseName}</td>
                <td className={getStatusClass(payment.status) + " p-2"}>{getStatusLabel(payment.status)}</td>
                <td className="p-2">BANK TRANSFER</td>
                <td className="p-2">{payment.completedAt}</td>
              </tr>
            ))}
          </tbody>
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
const getStatusClass = (status) => {
  switch (status) {
    case "COMPLETED":
      return "text-success fw-bold";
    case "CANCELED":
      return "text-danger fw-bold";
    case "PROCESSING":
      return "text-warning fw-bold";
    default:
      return "";
  }
};

const getStatusLabel = (status) => {
  switch (status) {
    case "COMPLETED":
      return "Sudah Bayar";
    case "CANCELED":
      return "Dibatalkan";
    case "PROCESSING":
      return "Menunggu Pembayaran";
    default:
      return "";
  }
};

export default PaymentStatus;
