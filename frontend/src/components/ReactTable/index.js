import React, { useMemo } from 'react';

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { COLUMNS } from './columns';
import MOCK_DATA from '../../services/mock_data.json';

import { FiArrowDown, FiArrowUp, FiMenu } from 'react-icons/fi';
import GlobalFilter from '../GlobalFilter';
import Pagination from './Pagination';

import { Wrapper } from './styles';

function ReactTable() {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    gotoPage,
    pageCount,
    setPageSize,
    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useGlobalFilter,
    useSortBy,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;

  const paginationProps = {
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
  };

  return (
    <Wrapper>
      <div className="container">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                    {column.render('Header')}
                    <span className="icon">
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <FiArrowDown />
                        ) : (
                          <FiArrowUp />
                        )
                      ) : (
                        <FiMenu />
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>

        <Pagination paginationProps={paginationProps} />
      </div>
    </Wrapper>
  );
}

export default ReactTable;
