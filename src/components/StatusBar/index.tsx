import React, { useState } from "react";
import { FieldProps, getIn } from "formik";
import { makeStyles } from "@mui/styles";
import {
  ShoppingBasketOutlined,
  Notifications,
  AccountCircle,
} from "@mui/icons-material";

import TextField from "../TextField";
import useStatusBarStyle from "./useStatusBar.style";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { useRouter } from "next/router";

const StatusBar = (props: any) => {
  const router = useRouter();
  const classes = useStatusBarStyle();
  const [search, setSearch] = useState("");
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleLogout = () => {
    localStorage.clear();
    router.push("/signIn");
  };
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

        <AccountCircle
          id="basic-button"
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          className="pointer"
        />
        <Menu
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>My account</MenuItem>
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </div>
  );
};
export default StatusBar;
