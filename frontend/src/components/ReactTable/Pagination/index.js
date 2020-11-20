import React, { useEffect } from 'react';
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronsLeft,
  FiChevronsRight,
} from 'react-icons/fi';

import { PaginationStyle } from './styles';

function Pagination(props) {
  const optionsPageSize = [5, 8, 10, 20, 30];

  const {
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    pageIndex,
    pageSize,
  } = props.paginationProps;

  useEffect(() => {
    setPageSize(8);
  }, []);

  return (
    <PaginationStyle>
      <div className="info-page">
        <span>
          Digite a página:{' '}
          <input
            type="number"
            defaultValue={pageIndex + 1}
            min="1"
            max={pageOptions.length}
            onChange={(e) => {
              const pageNumber = e.target.value
                ? Number(e.target.value) - 1
                : 0;
              gotoPage(pageNumber);
            }}
          />
        </span>
        <select
          value={pageSize}
          onChange={(e) => setPageSize(Number(e.target.value))}
        >
          {optionsPageSize.map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              {pageSize} itens
            </option>
          ))}
        </select>
      </div>
      <div>
        <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
          <FiChevronsLeft />
        </button>
        <button onClick={() => previousPage()} disabled={!canPreviousPage}>
          <FiChevronLeft />
        </button>
        <span>
          <strong>
            {pageIndex + 1} de {pageOptions.length}
          </strong>
        </span>
        <button onClick={() => nextPage()} disabled={!canNextPage}>
          <FiChevronRight />
        </button>
        <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
          <FiChevronsRight />
        </button>
      </div>
    </PaginationStyle>
  );
}

export default Pagination;
