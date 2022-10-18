import React, { useState } from "react";
import { FieldProps, getIn } from "formik";
import { makeStyles } from "@mui/styles";
import { ShoppingBasketOutlined, Notifications } from "@mui/icons-material";
import {
  TextFieldProps,
  TextField as MUITextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import TextField from "../TextField";
import useStatusBarStyle from "./useStatusBar.style";

const StatusBar = (props: any) => {
  const classes = useStatusBarStyle();
  const [search, setSearch] = useState("");
  return (
    <div className={classes.root}>
      <div>
        <TextField
          value={search}
          onChange={(e: any) => {
            console.log(e.target.value);
            setSearch(e.target.value);
          }}
          icon="search"
          placeholder="Search"
        />
      </div>
      <div className={classes.rightSide}>
        <Notifications />
        <ShoppingBasketOutlined />
      </div>
    </div>
  );
};
export default StatusBar;
