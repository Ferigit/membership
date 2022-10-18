import React, { useState, useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";

const Table = ({ tableSource = "", columns, data }: any) => {
  return (
    <div style={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={data ?? []}
        columns={columns}
        pageSize={12}
        style={{ background: "#fff" }}
      />
    </div>
  );
};

export default Table;
