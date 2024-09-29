import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <nav className="flex justify-center gap-2 mt-8" aria-label="Pagination">
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`pagination-button ${currentPage === index + 1 ? 'pagination-button-active' : 'pagination-button-inactive'}`}
          aria-label={`Page ${index + 1}`}
          onClick={() => onPageChange(index + 1)}
        >
          {index + 1}
        </button>
      ))}
    </nav>
  );
};

export default Pagination;
