import React from 'react';

const ServerSidePagination = ({ paginateData, onPageChange }) => {
    return (
        <div className="pagination">
            <button
                className={`pagination-button ${paginateData.prev_page_url === null ? 'disabled' : ''}`}
                disabled={paginateData.prev_page_url === null }
                onClick={() => onPageChange(paginateData.prev_page_url)}
            >
                Geri
            </button>

            <button
                className={`pagination-button ${paginateData.next_page_url === null ? 'disabled' : ''}`}
                disabled={paginateData.next_page_url === null }
                onClick={() => onPageChange(paginateData.next_page_url)}
            >
                İleri
            </button>
        </div>
    );
};

export default ServerSidePagination;
