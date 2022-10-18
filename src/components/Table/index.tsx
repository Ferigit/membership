import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import { DataGrid, GridToolbarQuickFilter } from "@mui/x-data-grid";
import useTableStyleStyle from "./useTableStyle.style";

const QuickSearchToolbar = () => {
  const classes = useTableStyleStyle();
  return (
    <Box
      className={classes.searchBox}
      sx={{
        p: 0.5,
        pb: 0,
      }}
    >
      <GridToolbarQuickFilter />
    </Box>
  );
};
const Table = ({ tableSource = "", columns, data }: any) => {
  console.log("data: ", data);
  return (
    <div style={{ height: 550, width: "100%" }}>
      <DataGrid
        rows={data?.data ?? []}
        columns={columns}
        pageSize={12}
        style={{ background: "#fff" }}
        components={{ Toolbar: QuickSearchToolbar }}
      />
    </div>
  );
};

export default Table;
