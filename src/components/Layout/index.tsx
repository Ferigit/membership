import { useEffect, useState } from "react";
import { makeStyles } from "@mui/styles";
import Sidebar from "./Sidebar";
import AuthorizedSidebar from "./AuthorizedSidebar";
import "react-toastify/dist/ReactToastify.min.css";
import { ToastProvider } from "../../../src/components";
import { useDispatch, useSelector } from "../../../src/store/store";
import { getUserState } from "../../../src/store/slices/userSlice";
import { setAuthorized } from "../../../src/store/slices/userSlice";

const useStyles = makeStyles(
  (theme: any) => ({
    containerBox: { display: "flex", height: "100vh" },
    sidebar: { width: "20%", backgroundColor: "rgb(244,244,244)" },
    mainBox: {
      width: "80%",
      display: "flex",
      justifyContent: "center",
      alignItems: "start",
    },
    [theme.breakpoints.down("md")]: {
      containerBox: {
        display: "flex",
        height: "unset",
        flexDirection: "column",
      },
      sidebar: { width: "100%", backgroundColor: "rgb(244,244,244)" },
      mainBox: {
        width: "100%",
      },
    },
  }),
  {
    name: "LayoutCustomStyle",
  }
);

const Layout = ({ children }: any) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { authorizedUserData }: any = useSelector(getUserState);
  useEffect(() => {
    async function chechAuth() {
      const isAuthorized: any = await localStorage.getItem("token");
      if (!!localStorage.getItem("token"))
        dispatch(setAuthorized(isAuthorized));
    }
    chechAuth();
  }, [authorizedUserData]);
  console.log("authorizedUserData: ", authorizedUserData);
  return (
    <div className={classes.containerBox}>
      <ToastProvider />

      <aside className={classes.sidebar}>
        {authorizedUserData ? <AuthorizedSidebar /> : <Sidebar />}
      </aside>
      <main className={classes.mainBox}>{children}</main>
    </div>
  );
};
export default Layout;
