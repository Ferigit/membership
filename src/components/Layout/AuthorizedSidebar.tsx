import React, { useState } from "react";
import { makeStyles } from "@mui/styles";
import {
  Message,
  Wallet,
  Assignment,
  Group,
  Settings,
  Insights,
  CatchingPokemon,
} from "@mui/icons-material";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";

const useStyles = makeStyles(
  {
    containerBox: {
      height: "100%",
      background: "#fff",
      borderRight: "1px solid #eee",
    },
    menu: {
      display: "flex",
      alignItems: "start",
      justifyContent: "center",
      flexDirection: "column",
      paddingLeft: 30,
      marginTop: 60,
    },
    logo: {
      width: 100,
      marginTop: 30,
      marginLeft: 30,
    },
    city: {
      width: 150,
      marginTop: 100,
    },
    accountName: {
      fontSize: 26,
      marginBottom: 40,
      marginTop: 40,
    },
    row: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      "& span": {
        marginLeft: 5,
      },
      marginBottom: 20,
    },
    rowContainer: {
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
      flexDirection: "column",
    },
  },
  {
    name: "SidebarCustomStyle",
  }
);

const Sidebar = ({ children }: any) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  const menu = [
    {
      title: "My company",
      icon: <CatchingPokemon />,
    },
    {
      title: "My company",
      icon: <Wallet />,
      subMenu: [{ title: "Company 1", icon: <Wallet /> }],
    },
    {
      title: "Messages",
      icon: <Message />,
    },
    {
      title: "Projects",
      icon: <Assignment />,
    },
    {
      title: "Network",
      icon: <Group />,
    },
    {
      title: "States",
      icon: <Insights />,
    },
    {
      title: "Settings",
      icon: <Settings />,
    },
  ];
  return (
    <div className={classes.containerBox}>
      <img
        src="/assets/images/dasboard-logo.png"
        alt="membership logo"
        className={classes.logo}
      />

      <div className={classes.menu}>
        <div className={classes.rowContainer}>
          {/* {menu.map((item) => {
            return (
              <div className={classes.row}>
                {item.icon} <span>{item.title}</span>
              </div>
            );
          })} */}

          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            component="nav"
            aria-labelledby="nested-list-subheader"
            subheader={
              <ListSubheader component="div" id="nested-list-subheader">
                Nested List Items
              </ListSubheader>
            }
          >
            {menu.map((menuItem, i) => {
              if (menuItem.subMenu) {
                return (
                  <>
                    <ListItemButton onClick={handleClick}>
                      <ListItemIcon>
                        <InboxIcon />
                      </ListItemIcon>
                      <ListItemText primary="Inbox" />
                      {open ? <ExpandLess /> : <ExpandMore />}
                    </ListItemButton>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }}>
                          <ListItemIcon>{menuItem.icon}</ListItemIcon>
                          <ListItemText primary={menuItem.title} />
                        </ListItemButton>
                      </List>
                    </Collapse>
                  </>
                );
              }
              return (
                <ListItemButton>
                  <ListItemIcon>{menuItem.icon}</ListItemIcon>
                  <ListItemText primary={menuItem.title} />
                </ListItemButton>
              );
            })}
            {/* <ListItemButton>
            <ListItemIcon>
              <SendIcon />
            </ListItemIcon>
            <ListItemText primary="Sent mail" />
          </ListItemButton>

          <ListItemButton onClick={handleClick}>
            <ListItemIcon>
              <InboxIcon />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton sx={{ pl: 4 }}>
                <ListItemIcon>
                  <StarBorder />
                </ListItemIcon>
                <ListItemText primary="Starred" />
              </ListItemButton>
            </List>
          </Collapse> */}
          </List>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
