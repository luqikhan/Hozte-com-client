import React from "react";

function Spinner() {
  return (
    <div className="d-flex align-items-center justify-content-center h-50">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
}

export default Spinner;
