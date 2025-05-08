import React from 'react';

const ServerSidePagination = ({ paginateData, onPageChange }) => {
    const { current_page, last_page, links } = paginateData;

    const renderPageLinks = () => {
        const pages = [];

        if (current_page > 2) {
            pages.push(
                <span key="start-ellipsis" className="pagination-ellipsis">...</span>
            );
        }

        for (let i = Math.max(1, current_page - 1); i <= Math.min(last_page, current_page + 1); i++) {
            pages.push(
                <button
                    key={i}
                    className={`pagination-button ${i === current_page ? 'active' : ''}`}
                    onClick={() => onPageChange(`${paginateData.path}?page=${i}`)}
                >
                    {i}
                </button>
            );
        }

        if (current_page < last_page - 1) {
            pages.push(
                <span key="end-ellipsis" className="pagination-ellipsis">...</span>
            );
        }

        return pages;
    };

    return (
        <div className="pagination">
            <button
                className={`pagination-button ${paginateData.prev_page_url === null ? 'disabled' : ''}`}
                disabled={paginateData.prev_page_url === null}
                onClick={() => onPageChange(paginateData.prev_page_url)}
            >
                Geri
            </button>

            {renderPageLinks()}

            <button
                className={`pagination-button ${paginateData.next_page_url === null ? 'disabled' : ''}`}
                disabled={paginateData.next_page_url === null}
                onClick={() => onPageChange(paginateData.next_page_url)}
            >
                İleri
            </button>
        </div>
    );
};

export default ServerSidePagination;
