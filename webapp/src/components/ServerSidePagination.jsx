import React from 'react';

const ServerSidePagination = ({ paginateData }) => {
    return (
        <div className="pagination">
            <button
                className={`pagination-button ${paginateData.prev_page_url === null ? 'disabled' : ''}`}
                disabled={paginateData.prev_page_url === null }
            >
                Geri
            </button>

            <button
                className={`pagination-button ${paginateData.next_page_url === null ? 'disabled' : ''}`}
                disabled={paginateData.next_page_url === null }
            >
                İleri
            </button>
        </div>
    );
};

export default ServerSidePagination;
