import React from "react";
import { useTable, useGlobalFilter, usePagination } from "react-table";

import { GlobalFilter } from "./FilteringTable";

function TableStructure({ columns, data, updateMyData, skipPageReset }) {
  // Use the state and functions returned from useTable to build your UI

  const {
    getTableProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageCount,
    gotoPage,
    setPageSize,

    prepareRow,
    state,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
      updateMyData,
      skipPageReset,
      autoResetPage: !skipPageReset,
    },
    useGlobalFilter,
    usePagination
  );

  const { globalFilter, pageIndex, pageSize } = state;
  const nextDisabled = canNextPage ? "" : "disabled";
  const previousDisabled = canPreviousPage ? "" : "disabled";

  // Render the UI for your table
  return (
    <div>
      <div className="row mb-2">
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-3">
              <p>Record Per Page</p>
            </div>
            <div className="col-md-9">
              <select
                className="custom-select w-25"
                value={pageSize}
                onChange={(e) => setPageSize(Number(e.target.value))}
              >
                {[10, 20, 30].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    {pageSize}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="d-flex col-md-6 justify-content-end">
          <GlobalFilter filter={globalFilter} setFilter={setGlobalFilter} />
        </div>
      </div>

      <div className="table-responsive text-nowrap">
        <table
          className="table table-bordered table-striped"
          {...getTableProps()}
        >
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th {...column.getHeaderProps()}>
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {page.map((row, i) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td {...cell.getCellProps()}>{cell.render("Cell")}</td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="row mt-3">
        <div className="col-md-6">
          <p>
            Page {pageIndex} of {pageCount}{" "}
          </p>
        </div>
        <div className="d-flex col-md-6 justify-content-end align-items-center">
          <p className="mr-2">Go To Page</p>
          <div className="input-group w-25 mr-2">
            <input
              type="number"
              className="form-control"
              placeholder="Page Number"
              aria-label="PageNumber"
              defaultValue={pageIndex + 1}
              onChange={(e) => {
                const pageNumber = e.target.value
                  ? Number(e.target.value) - 1
                  : 0;
                gotoPage(pageNumber);
              }}
              aria-describedby="basic-addon1"
            />
          </div>
          <nav aria-label="Page navigation example">
            <ul className="pagination justify-content-center">
              <li className={`page-item ${previousDisabled}`}>
                <button
                  className="page-link"
                  onClick={() => previousPage()}
                  disabled={!canPreviousPage}
                >
                  Previous
                </button>
              </li>

              <li className={`page-item ${nextDisabled}`}>
                <button
                  className="page-link"
                  onClick={() => nextPage()}
                  disabled={!canNextPage}
                >
                  Next
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default TableStructure;
