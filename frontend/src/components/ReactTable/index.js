import React, { useEffect, useMemo } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import {
  useTable,
  useSortBy,
  useGlobalFilter,
  usePagination,
} from 'react-table';
import { COLUMNS } from './columns';

import { FiArrowDown, FiArrowUp, FiEye, FiMenu } from 'react-icons/fi';
import GlobalFilter from '../GlobalFilter';
import Pagination from './Pagination';

import { Wrapper } from './styles';

function ReactTable() {
  const sales = useStoreState((state) => state.sale.sales);
  const getAllSales = useStoreActions((actions) => actions.sale.getAllSales);

  useEffect(() => {
    getAllSales()
  }, [])

  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => sales, []);

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

  function handleClickProduct() {
    alert('Feature em estado de implementação!')
  }

  return (
    <Wrapper>
      <div className="container">
        <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />

        <table {...getTableProps()}>
          <thead>
            {headerGroups.map((headerGroup, index) => (
              <tr key={index} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column, index) => (
                  <th key={index} {...column.getHeaderProps(column.getSortByToggleProps())}>
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
                <th>Produtos</th>
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {page.map((row, index) => {
              prepareRow(row);
              return (
                <tr key={index} {...row.getRowProps()}>
                  {row.cells.map((cell, index) => {
                    return (
                      <td key={index} {...cell.getCellProps()}>{cell.render('Cell')}</td>
                    );
                  })}
                    <td onClick={handleClickProduct}>
                      <FiEye size={18} />
                    </td>
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
