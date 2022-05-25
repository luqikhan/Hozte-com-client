import React from "react";
import TableStructure from "./TableStructure";

function TableComponent({
  columns,
  data,
  setOrders,
  updateMyData,
  skipPageReset,
}) {
  return (
    <div className="mt-20 mb-20">
      <TableStructure
        columns={columns}
        data={data}
        setOrders={setOrders}
        updateMyData={updateMyData}
        skipPageReset={skipPageReset}
      />
    </div>
  );
}

export default TableComponent;
