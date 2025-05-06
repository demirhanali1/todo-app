import React from 'react';

const StatePagination = ({ currentPage, totalPages, onPageChange }) => {
    return (
        <div className="pagination-container">
            {/* Main Back Button */}
            <button
                onClick={() => onPageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className={currentPage === 1 ? "pagination-button disabled" : "pagination-button"}
            >
                Geri
            </button>

            {/* Left ellipsis */}
            {currentPage > 2 && (
                <span className="pagination-ellipsis">...</span>
            )}

            {/* Previous Page Button */}
            {currentPage > 1 && (
                <button
                    onClick={() => onPageChange(currentPage - 1)}
                    className="pagination-number-button"
                >
                    {currentPage - 1}
                </button>
            )}

            {/* Current page number */}
            <span className="pagination-current-page">
                {currentPage}
            </span>

            {/* Next Page Button */}
            {currentPage < totalPages && (
                <button
                    onClick={() => onPageChange(currentPage + 1)}
                    className="pagination-number-button"
                >
                    {currentPage + 1}
                </button>
            )}

            {/* Right ellipsis */}
            {currentPage < totalPages - 1 && (
                <span className="pagination-ellipsis">...</span>
            )}

            {/* Main Forward Button */}
            <button
                onClick={() => onPageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className={currentPage === totalPages ? "pagination-button disabled" : "pagination-button"}
            >
                İleri
            </button>
        </div>
    );
};

export default StatePagination;
