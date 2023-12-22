// Pagination.js
import React from "react";

const CoursePagination = ({ currentPage, totalPages, onPageChange }) => {
  const renderPageNumbers = () => {
    const pageNumbers = [];
    for (let i = 0; i <= totalPages - 1; i++) {
      pageNumbers.push(
        <button key={i} onClick={() => onPageChange(i)} className={`btn btn-outline-dark d-flex justify-content-center align-items-center m-3  ${currentPage === i ? "active" : ""}`}>
          {i + 1}
        </button>
      );
    }
    return pageNumbers;
  };

  return <div className="c-pagination d-flex justify-content-center align-items-center">Halaman {renderPageNumbers()}</div>;
};

export default CoursePagination;
